import './globals.css';
import './styles/global.scss';
import React from 'react';
import QueryProvider from './query/QueryProvider';
import HeaderPage from '@/components/user/HeaderPage';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <HeaderPage />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
