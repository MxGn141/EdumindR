import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, Globe, Code, Database, Smartphone, ShoppingCart } from 'lucide-react';
import { Course } from '../data/courses';
import { useCart } from '../context/CartContext';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addItem } = useCart();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700">
          {course.level}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <div className="text-slate-700">{getIcon(course.iconName)}</div>
          <span className="text-sm text-slate-500">{course.duration}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{course.title}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{course.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-sm text-slate-500">({course.students} estudiantes)</span>
          </div>
          <div className="text-2xl font-bold text-slate-700">{course.price}</div>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            to={`/curso/${course.id}`}
            className="flex-1 bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Ver Detalles</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => addItem(course)}
            className="bg-emerald-600 text-white p-3 rounded-lg hover:bg-emerald-700 transition-colors"
            title="Agregar al carrito"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 