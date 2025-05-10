import React, { createContext, useState, useContext, useEffect } from 'react';
import { Product, ShopContextType } from '../types';
import { v4 as uuidv4 } from 'uuid';

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from localStorage on initial render
    const storedProducts = localStorage.getItem('shopProducts');
    if (storedProducts) {
      try {
        setProducts(JSON.parse(storedProducts));
      } catch (e) {
        localStorage.removeItem('shopProducts');
      }
    }
  }, []);

  const addProduct = (product: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...product,
      id: uuidv4(),
      createdAt: Date.now()
    };
    
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('shopProducts', JSON.stringify(updatedProducts));
  };

  const value = {
    products,
    addProduct
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};