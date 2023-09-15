import { useEffect, useState } from 'react';

const maxBreakpointWidths = {
  mobile: 480,
  tablet: 768,
  smallDesktop: 1024,
  desktop: Number.MAX_SAFE_INTEGER
};

function findBreakpoint(width) {

  const breakpointsFiltered = Object.keys(maxBreakpointWidths).filter((breakpoint) => {

    return width <= maxBreakpointWidths[breakpoint] 

  });

  return breakpointsFiltered[breakpointsFiltered.length - 1];

  throw new Error("useViewportWidth: Error within findBreakpoint function");

}

export function useBreakpoint(initWidth = window.innerWidth) {

  const [breakpoint, setBreakpoint] = useState(findBreakpoint(initWidth));


  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      const breakpoint = findBreakpoint(newWidth);
      setBreakpoint(breakpoint);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return breakpoint;

}

export function useViewportWidth(initWidth = window.innerWidth) {

  const [viewportWidth, setViewportWidth] = useState(initWidth);

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