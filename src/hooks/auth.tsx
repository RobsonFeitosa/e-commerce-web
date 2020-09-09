import React, { createContext, useCallback, useState, useContext } from 'react';
import jwtdecode from 'jwt-decode';
import api from '../services/api';

interface ICustomer {
  id: string;
  level: number;
  name: string;
  email: string;
  avatar: string;
  avatar_url: string;
}

interface IAuthState {
  token: string;
  customer: ICustomer;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  customer: ICustomer;
  signIn(crendentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateCustomer(customer: ICustomer): void;
  isAuthenticated(): boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@CompreDiCasa:token');
    const customer = localStorage.getItem('@CompreDiCasa:customer');

    if (token && customer) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, customer: JSON.parse(customer) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, customer } = response.data;

    localStorage.setItem('@CompreDiCasa:token', token);
    localStorage.setItem('@CompreDiCasa:customer', JSON.stringify(customer));

    setData({ token, customer });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CompreDiCasa:token');
    localStorage.removeItem('@CompreDiCasa:customer');

    setData({} as IAuthState);
  }, []);

  const isAuthenticated = useCallback(() => {
    const { token } = data;
    try {
      const { exp } = jwtdecode(token);
      if (Date.now() >= exp * 1000) {
        return false;
      }
    } catch (err) {
      return false;
    }
    return true;
  }, [data]);

  const updateCustomer = useCallback(
    (customer: ICustomer) => {
      localStorage.setItem('@CompreDiCasa:customer', JSON.stringify(customer));

      setData({
        token: data.token,
        customer,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{
        customer: data.customer,
        signIn,
        signOut,
        updateCustomer,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
