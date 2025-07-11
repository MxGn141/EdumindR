import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Edumind" className="h-10 w-10" />
            <span className="text-2xl font-bold text-slate-800">Edumind</span>
          </Link>
          
                      <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">Inicio</Link>
              <Link to="/cursos" className="text-slate-600 hover:text-slate-800 transition-colors">Cursos</Link>
              <Link to="/nosotros" className="text-slate-600 hover:text-slate-800 transition-colors">Nosotros</Link>
              <Link to="/contacto" className="text-slate-600 hover:text-slate-800 transition-colors">Contacto</Link>
              <button className="bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                Comenzar
              </button>
              <button
                onClick={toggleCart}
                className="relative text-slate-600 hover:text-slate-800 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Inicio</Link>
            <Link to="/cursos" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Cursos</Link>
            <Link to="/nosotros" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Nosotros</Link>
            <Link to="/contacto" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Contacto</Link>
            <button className="w-full text-left bg-slate-700 text-white px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Comenzar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header; 