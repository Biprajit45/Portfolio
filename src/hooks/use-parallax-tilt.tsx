import { useState } from 'react';

const useParallaxTilt = (ref: React.RefObject<HTMLElement>) => {
  const [tilt, setTilt] = useState({ transform: '' });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    setTilt({ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
  };

  const handleMouseLeave = () => {
    setTilt({ transform: '' });
  };

  return {
    ...tilt,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};

export default useParallaxTilt; 