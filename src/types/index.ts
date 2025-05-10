export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: number;
}

export interface AuthUser {
  username: string;
  accessCode: string;
  isAuthenticated: boolean;
}

export interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, accessCode: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface ShopContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
}