import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Users, 
  CheckCircle, 
  Globe, 
  Code, 
  Database, 
  Smartphone,
  ArrowLeft,
  Play,
  BookOpen,
  Award,
  MessageCircle,
  ShoppingCart
} from 'lucide-react';
import { getCourseById } from '../data/courses';
import { useCart } from '../context/CartContext';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(Number(id));
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

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Curso no encontrado</h1>
          <p className="text-slate-600 mb-6">El curso que buscas no existe o ha sido removido.</p>
          <Link 
            to="/cursos"
            className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Volver a Cursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/cursos"
            className="inline-flex items-center text-slate-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Cursos
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-slate-200">{getIcon(course.iconName)}</div>
                <span className="text-slate-300">{course.category}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300">{course.level}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {course.title}
              </h1>
              
              <p className="text-xl text-slate-200 mb-6 leading-relaxed">
                {course.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-slate-200">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-200">
                  <Users className="w-5 h-5" />
                  <span>{course.students} estudiantes</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-200">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-white mb-6">
                {course.price}
              </div>
              
              <button 
                onClick={() => course && addItem(course)}
                className="bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors mr-4 flex items-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Agregar al Carrito</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors">
                Ver Demo
              </button>
            </div>
            
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <div className="bg-white rounded-xl p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué aprenderás?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Modules */}
              <div className="bg-white rounded-xl p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contenido del Curso</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-700">
                          {index + 1}
                        </div>
                        <span className="text-slate-700 font-medium">{module}</span>
                      </div>
                      <Play className="w-5 h-5 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Requisitos</h2>
                <div className="space-y-3">
                  {course.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Información del Curso</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Instructor:</span>
                    <span className="font-medium text-slate-900">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Idioma:</span>
                    <span className="font-medium text-slate-900">{course.language}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Categoría:</span>
                    <span className="font-medium text-slate-900">{course.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Nivel:</span>
                    <span className="font-medium text-slate-900">{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Features Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Características</h3>
                <div className="space-y-3">
                  {course.certificate && (
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Certificado incluido</span>
                    </div>
                  )}
                  {course.liveClasses && (
                    <div className="flex items-center space-x-3">
                      <Play className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Clases en vivo</span>
                    </div>
                  )}
                  {course.support && (
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Soporte 24/7</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    <span className="text-slate-700">Acceso de por vida</span>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">{course.price}</div>
                <p className="text-slate-200 mb-6">Acceso completo al curso</p>
                <button className="w-full bg-white text-slate-700 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors mb-3">
                  Inscribirse Ahora
                </button>
                <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail; 