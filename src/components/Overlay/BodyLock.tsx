import { useEffect } from 'react';

import type React from 'react';

export const BodyLock: React.FC = () => {
  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden;
    `;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.cssText = `
        overflow: visible;
        overflow: overlay;
      `;
    };
  }, []);

  return null;
};
