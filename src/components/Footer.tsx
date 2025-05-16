import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-6 w-6 mr-2" />
              <span className="text-lg font-serif font-bold">O Cantinho da Avó</span>
            </div>
            <p className="text-gray-300 text-sm">
              Os melhores produtos caseiros desde 2025.
            </p>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-serif text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/category/doces" className="text-gray-300 hover:text-white transition-colors">Doces</a></li>
              <li><a href="/category/salgados" className="text-gray-300 hover:text-white transition-colors">Salgados</a></li>
              <li><a href="/category/bebidas" className="text-gray-300 hover:text-white transition-colors">Bebidas</a></li>
              <li><a href="/category/outros" className="text-gray-300 hover:text-white transition-colors">Outros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-serif text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>233 040 755</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>cantinhodaavo@email.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>Rua Principal, 123<br />Coimbra, Portugal</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} O Cantinho da Avó. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;