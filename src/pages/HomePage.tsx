import React from 'react';
import { Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const { products } = useShop();
  
  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <section className="relative bg-amber-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fadeIn">
              O Cantinho da Avó
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-100">
              Consulte os preços dos nossos produtos caseiros
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Confira os preços dos nossos produtos caseiros feitos com amor e carinho
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-amber-100 rounded-lg">
            <Store className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-amber-800 mb-2">Nenhum produto disponível</h3>
            <p className="text-amber-700 mb-6">Os produtos adicionados pelo administrador aparecerão aqui.</p>
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 bg-amber-700 hover:bg-amber-600 text-white font-medium rounded-md transition-colors"
            >
              Admin Login
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;