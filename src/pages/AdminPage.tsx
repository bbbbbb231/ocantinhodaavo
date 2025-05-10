import React from 'react';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';
import { ShoppingBag, Package } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { products } = useShop();
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-blue-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user?.username}. Manage your products from here.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ProductForm />
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif font-bold text-blue-900">Your Products</h2>
              <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <Package className="h-4 w-4 mr-1" />
                <span>{products.length} Products</span>
              </div>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No products yet</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Get started by adding your first product using the form on the left.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;