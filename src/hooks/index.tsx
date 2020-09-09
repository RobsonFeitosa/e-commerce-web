import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { CartProvider } from './cart';
import { FavoriteProvider } from './favorite';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <FavoriteProvider>
      <CartProvider>
        <ToastProvider>{children}</ToastProvider>
      </CartProvider>
    </FavoriteProvider>
  </AuthProvider>
);

export default AppProvider;
