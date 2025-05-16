'use client';

import { ReactNode } from 'react';
import CookieBanner from './CookieBanner';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CookieBanner />
    </>
  );
}
