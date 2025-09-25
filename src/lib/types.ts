// Type definitions for the Autera application

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  image: string;
}

export interface Metric {
  number: string;
  label: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
