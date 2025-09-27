import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return null;
};

export default SmoothScroll;
