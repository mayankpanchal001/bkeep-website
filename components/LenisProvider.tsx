'use client';

import { useLenis } from '@/lib/lenis';
import { useEffect } from 'react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();

  return <>{children}</>;
}
