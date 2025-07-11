import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Users, 
  Award, 
  Clock, 
  Star,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Clases en Vivo",
      description: "Interactúa directamente con instructores expertos en tiempo real"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Material Actualizado",
      description: "Contenido siempre al día con las últimas tecnologías del mercado"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidad Activa",
      description: "Conecta con otros estudiantes y forma parte de nuestra red"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificación",
      description: "Obtén certificados reconocidos al completar tus cursos"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Estudiantes" },
    { number: "50+", label: "Cursos" },
    { number: "98%", label: "Satisfacción" },
    { number: "24/7", label: "Soporte" }
  ];

  // Mostrar solo los primeros 6 cursos en la página de inicio
  const featuredCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Aprende <span className="text-slate-700">Programación</span> con los Mejores
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Domina las tecnologías más demandadas del mercado con nuestros cursos especializados. 
                Desde HTML hasta frameworks avanzados, te acompañamos en cada paso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/cursos"
                  className="bg-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Explorar Cursos
                </Link>
                <button className="border-2 border-slate-700 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 hover:text-white transition-all">
                  Ver Demo Gratuita
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Estudiante programando" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">+15,000 estudiantes</p>
                    <p className="text-slate-600">han transformado su carrera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-slate-700 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">¿Por qué elegir Edumind?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrecemos una experiencia de aprendizaje única que combina teoría y práctica 
              para garantizar tu éxito profesional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-slate-100 p-3 rounded-full w-fit mb-6 text-slate-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Cursos Populares</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Desde principiante hasta experto, tenemos el curso perfecto para tu nivel y objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/cursos"
              className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
            >
              Ver Todos los Cursos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu carrera?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya han cambiado su futuro profesional con Edumind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors">
              Comenzar Gratis
            </button>
            <Link 
              to="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors"
            >
              Hablar con un Asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 