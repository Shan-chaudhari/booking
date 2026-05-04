import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Alert } from 'react-native';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Actions
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'REGISTER_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'RESTORE_TOKEN'; payload: { user: User; token: string } };

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: true,
  isAuthenticated: false,
};

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isAuthenticated: true,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'RESTORE_TOKEN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

// Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Simulate token restoration on app start
  useEffect(() => {
    // TODO: Replace with actual token restoration from secure storage
    const restoreToken = async () => {
      try {
        // Simulate delay
        await new Promise(resolve => setTimeout(() => resolve(undefined), 1000));
        
        // For now, we won't restore any token
        dispatch({ type: 'LOGOUT' });
      } catch (error) {
        console.error('Failed to restore token:', error);
        dispatch({ type: 'LOGOUT' });
      }
    };

    restoreToken();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      // TODO: Replace with actual API call
      // const response = await authService.login(email, password);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(() => resolve(undefined), 1500));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
      };
      
      const mockToken = 'mock-jwt-token';
      
      // TODO: Save token to secure storage
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: mockUser, token: mockToken },
      });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      throw error;
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    dispatch({ type: 'REGISTER_START' });

    try {
      // TODO: Replace with actual API call
      // const response = await authService.register(name, email, password);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(() => resolve(undefined), 1500));
      
      // Mock successful registration
      const mockUser: User = {
        id: '1',
        name: name,
        email: email,
      };
      
      const mockToken = 'mock-jwt-token';
      
      // TODO: Save token to secure storage
      
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: { user: mockUser, token: mockToken },
      });
    } catch (error) {
      dispatch({ type: 'REGISTER_FAILURE' });
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    // TODO: Remove token from secure storage
    dispatch({ type: 'LOGOUT' });
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
