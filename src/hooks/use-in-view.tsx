import { useEffect, useState } from 'react';

const useInView = (ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
};

export default useInView; 