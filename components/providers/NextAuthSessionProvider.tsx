'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

type NextAuthSessionProviderProps = {
  children: ReactNode;
  /**
   * Seconds between background session refetches. Set to false to disable.
   * Default: 5 minutes
   */
  refetchInterval?: number;
  /**
   * Whether to refetch on window focus. Default: true
   */
  refetchOnWindowFocus?: boolean;
};

export default function NextAuthSessionProvider({
  children,
  refetchInterval = 5 * 60,
  refetchOnWindowFocus = true,
}: NextAuthSessionProviderProps) {
  return (
    <SessionProvider
      refetchInterval={refetchInterval}
      refetchOnWindowFocus={refetchOnWindowFocus}
    >
      {children}
    </SessionProvider>
  );
}
