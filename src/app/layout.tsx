import './globals.css';
import './styles/global.scss';
import React from 'react';
import QueryProvider from '../query/QueryProvider';
import HeaderPage from '@/components/user/HeaderPage';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <HeaderPage />
        <Provider store={store}>
          <QueryProvider>{children}</QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
