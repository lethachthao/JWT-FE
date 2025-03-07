'use client';
import React from 'react';
import { persistor, store } from '@/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import HeaderPage from '@/components/user/HeaderPage';
import MenuPage from '@/components/user/MenuPage';
import Footer from '@/components/user/Foooter';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <HeaderPage />
        <MenuPage />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
