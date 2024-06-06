'use client';
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AppLoader from '@devdocs/components/AppLoader';
import {useAuthUserKeyCloack} from '@devdocs/hooks/AuthHooks';
import {Layouts} from '@devdocs/components/Layout';

export default function RootLayout({ children }: any) {

  const AppLayout = Layouts;
  const searchParams = useSearchParams();
  const queryParams = searchParams?.toString();
  const { user, isLoading } = useAuthUserKeyCloack();

  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push('/' + (queryParams ? '?' + queryParams : ''));
    }
  }, [user, isLoading, router, queryParams]);

  if (!user || isLoading) return <AppLoader />;

  return <AppLayout >{children}</AppLayout>;
}
