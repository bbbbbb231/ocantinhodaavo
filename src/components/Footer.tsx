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
              <span className="text-lg font-serif font-bold">Luxury Boutique</span>
            </div>
            <p className="text-gray-300 text-sm">
              Offering the finest selection of premium products since 2025.
            </p>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-serif text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/category/clothing" className="text-gray-300 hover:text-white transition-colors">Clothing</a></li>
              <li><a href="/category/accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
              <li><a href="/category/jewelry" className="text-gray-300 hover:text-white transition-colors">Jewelry</a></li>
              <li><a href="/category/home" className="text-gray-300 hover:text-white transition-colors">Home Decor</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@luxuryboutique.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>123 Luxury Avenue<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luxury Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;