import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Format price with 2 decimal places and currency symbol
  const formattedPrice = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(product.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-amber-600 font-medium text-lg mb-2">{formattedPrice}</p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{product.description}</p>
        
        <button className="w-full py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default ProductCard;