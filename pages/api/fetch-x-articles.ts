import type { NextApiResponse } from 'next';

interface TwitterResponse {
  data?: Array<{
    id: string;
    text: string;
    entities?: {
      urls?: Array<{
        url: string;
        expanded_url: string;
        display_url: string;
        title?: string;
        description?: string;
      }>;
    };
    attachments?: {
      media_keys?: string[];
    };
  }>;
  includes?: {
    media?: Array<{
      media_key: string;
      type: string;
      url?: string;
      preview_image_url?: string;
    }>;
  };
  meta?: {
    result_count: number;
    next_token?: string;
  };
  errors?: Array<{
    message: string;
  }>;
}

export interface ArticleResponse {
  id: string;
  url: string;
  imageUrl?: string;
  title?: string;
}

// TODO: Lookup docs about fetching articles from X API, currently no documentation available, only fetching tweets
export default async function handler(res: NextApiResponse) {
  try {
    const user_id = process.env.X_USER_ID;

    if (!user_id) {
      return res.status(400).json({ error: 'user_id is required' });
    }

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.X_DEVELOPER_API_KEY}`
      }
    };

    const allArticles: ArticleResponse[] = [];
    let paginationToken: string | undefined;
    const maxPages = 5; // Limit to prevent excessive API calls
    let pageCount = 0;

    do {
      let tweetsUrl = `https://api.twitter.com/2/users/${user_id}/tweets?expansions=attachments.media_keys&tweet.fields=attachments,entities,text&media.fields=url,preview_image_url&max_results=6`;

      if (paginationToken) {
        tweetsUrl += `&pagination_token=${paginationToken}`;
      }

      const tweetsResponse = await fetch(tweetsUrl, options);

      if (!tweetsResponse.ok) {
        return res.status(tweetsResponse.status).json({
          error: `Twitter API error: ${tweetsResponse.statusText}`
        });
      }

      const data = await tweetsResponse.json() as TwitterResponse;

      console.log('Raw API Response:', data);

      if (data.errors && data.errors.length > 0) {
        return res.status(400).json({ error: data.errors[0].message });
      }

      const mediaMap = new Map<string, string>();
      if (data.includes?.media) {
        data.includes.media.forEach(media => {
          if (media.url || media.preview_image_url) {
            mediaMap.set(media.media_key, media.url || media.preview_image_url || '');
          }
        });
      }

      if (data.data) {
        data.data.forEach(tweet => {
          if (tweet.entities?.urls && tweet.entities.urls.length > 0) {
            tweet.entities.urls.forEach(url => {
              if (isArticleUrl(url.expanded_url)) {
                const article: ArticleResponse = {
                  url: url.expanded_url,
                  title: url.title,
                  id: tweet.id
                };

                if (tweet.attachments?.media_keys && tweet.attachments.media_keys.length > 0) {
                  const mediaKey = tweet.attachments.media_keys[0];
                  const imageUrl = mediaMap.get(mediaKey);
                  if (imageUrl) {
                    article.imageUrl = imageUrl;
                  }
                }

                allArticles.push(article);
              }
            });
          }
        });
      }

      paginationToken = data.meta?.next_token;
      pageCount++;

      console.log('Next Pagination Token:', paginationToken);

    } while (paginationToken && pageCount < maxPages);

    res.status(200).json(allArticles);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: `Error fetching tweets: ${errorMessage}` });
  }
}

function isArticleUrl(url: string): boolean {
  const nonArticleDomains = [
    'twitter.com', 'facebook.com', 'instagram.com',
    'youtube.com', 'youtu.be', 'tiktok.com', 'linkedin.com'
  ];

  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace('www.', '');

    return !nonArticleDomains.some(nonArticleDomain =>
      domain.includes(nonArticleDomain)
    );
  } catch {
    return false;
  }
}
