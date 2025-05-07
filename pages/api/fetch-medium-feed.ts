import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://medium.com/feed/theecosystem');
    const text = await response.text();
    res.status(200).json({ contents: text });
  } catch {
    res.status(500).json({ error: 'Error fetching the feed' });
  }
}
