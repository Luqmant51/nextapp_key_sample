'use client';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import InfoViewContextProvider from '@devdocs/context/AppContextProvider/InfoViewContextProvider';
import AppAuthProvider from '@devdocs/core/AppAuthProvider';
import AuthRoutes from '@devdocs/components/AuthRoutes';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <InfoViewContextProvider>
            <AppAuthProvider>
              <AuthRoutes>
                {children}
              </AuthRoutes>
            </AppAuthProvider>
          </InfoViewContextProvider>
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
