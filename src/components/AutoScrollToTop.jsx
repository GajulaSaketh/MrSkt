import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AutoScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default AutoScrollToTop;
