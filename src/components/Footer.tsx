import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="Edumind" className="h-10 w-10" />
              <span className="text-2xl font-bold">Edumind</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transformamos vidas a través de la educación tecnológica de calidad.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Cursos</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/cursos" className="hover:text-white transition-colors">HTML & CSS</Link></li>
              <li><Link to="/cursos" className="hover:text-white transition-colors">JavaScript</Link></li>
              <li><Link to="/cursos" className="hover:text-white transition-colors">PHP & MySQL</Link></li>
              <li><Link to="/cursos" className="hover:text-white transition-colors">Python</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Instructores</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Carreras</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/contacto" className="hover:text-white transition-colors">Centro de Ayuda</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Términos</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Privacidad</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Edumind. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 