'use client'

import React, { createContext, useCallback, useContext, useState, useEffect } from 'react';

interface ResizeContextData {
  windowWidth: number;
  windowHeight: number;
}

const ResizeContext = createContext<ResizeContextData>({} as ResizeContextData);

export default function ResizeProvider({ children }: { children: React.ReactNode }) {
  const [windowSize, setWindowSize] = useState<ResizeContextData>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <ResizeContext.Provider
      value={{
        windowWidth: windowSize.windowWidth,
        windowHeight: windowSize.windowHeight,
      }}
    >
      {children}
    </ResizeContext.Provider>
  );
};

export function useResize(): ResizeContextData {
  const context = useContext(ResizeContext);

  if (!context) {
    throw new Error('useResize must be used within a ResizeProvider');
  }

  return context;
}