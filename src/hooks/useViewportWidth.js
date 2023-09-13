import React, { useEffect, useState } from 'react';

export function useViewportWidth(initVal = window.innerWidth) {

  const [viewportWidth, setViewportWidth] = useState(initVal);

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      setViewportWidth(newWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return viewportWidth;

}