'use client';
import './globals.css';
import './styles/global.scss';
import React from 'react';
import QueryProvider from '../query/QueryProvider';
import HeaderPage from '@/components/user/HeaderPage';
import { persistor, store } from '@/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <HeaderPage />
            <QueryProvider>{children}</QueryProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
