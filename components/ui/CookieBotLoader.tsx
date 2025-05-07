import { useEffect } from 'react';

const CookieBotLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', '879d6476-b92b-4f45-aca8-b3299186cd06');
    script.async = true;

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default CookieBotLoader;