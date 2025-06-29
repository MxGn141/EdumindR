import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Play, 
  Users, 
  Award, 
  Clock, 
  Star,
  ChevronRight,
  Code,
  Database,
  Globe,
  Smartphone,
  BookOpen,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      description: "Aprende las bases del desarrollo web con HTML5 y CSS3",
      duration: "8 semanas",
      students: 1250,
      rating: 4.9,
      price: "$49",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Globe className="w-6 h-6" />,
      level: "Principiante"
    },
    {
      id: 2,
      title: "JavaScript Avanzado",
      description: "Domina JavaScript moderno y sus frameworks más populares",
      duration: "12 semanas",
      students: 980,
      rating: 4.8,
      price: "$79",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Code className="w-6 h-6" />,
      level: "Intermedio"
    },
    {
      id: 3,
      title: "PHP & MySQL",
      description: "Desarrollo backend completo con PHP y bases de datos MySQL",
      duration: "10 semanas",
      students: 756,
      rating: 4.7,
      price: "$69",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Database className="w-6 h-6" />,
      level: "Intermedio"
    },
    {
      id: 4,
      title: "Python para Principiantes",
      description: "Inicia tu carrera en programación con Python",
      duration: "6 semanas",
      students: 1450,
      rating: 4.9,
      price: "$39",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Code className="w-6 h-6" />,
      level: "Principiante"
    },
    {
      id: 5,
      title: "Desarrollo Mobile",
      description: "Crea aplicaciones móviles nativas y multiplataforma",
      duration: "14 semanas",
      students: 623,
      rating: 4.8,
      price: "$99",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Smartphone className="w-6 h-6" />,
      level: "Avanzado"
    },
    {
      id: 6,
      title: "React & Node.js",
      description: "Stack completo para aplicaciones web modernas",
      duration: "16 semanas",
      students: 892,
      rating: 4.9,
      price: "$119",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Globe className="w-6 h-6" />,
      level: "Avanzado"
    }
  ];

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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Edumind" className="h-10 w-10" />
              <span className="text-2xl font-bold text-slate-800">Edumind</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-600 hover:text-slate-800 transition-colors">Inicio</a>
              <a href="#cursos" className="text-slate-600 hover:text-slate-800 transition-colors">Cursos</a>
              <a href="#nosotros" className="text-slate-600 hover:text-slate-800 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-slate-600 hover:text-slate-800 transition-colors">Contacto</a>
              <button className="bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                Comenzar
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
              <a href="#inicio" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Inicio</a>
              <a href="#cursos" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Cursos</a>
              <a href="#nosotros" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Nosotros</a>
              <a href="#contacto" className="block px-3 py-2 text-slate-600 hover:text-slate-800">Contacto</a>
              <button className="w-full text-left bg-slate-700 text-white px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                Comenzar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
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
                <button className="bg-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg">
                  Explorar Cursos
                </button>
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
      <section id="cursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Cursos Populares</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Desde principiante hasta experto, tenemos el curso perfecto para tu nivel y objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
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
                    <div className="text-slate-700">{course.icon}</div>
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
                  
                  <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2">
                    <span>Inscribirse Ahora</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
              Ver Todos los Cursos
            </button>
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
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors">
              Hablar con un Asesor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#" className="hover:text-white transition-colors">HTML & CSS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JavaScript</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PHP & MySQL</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instructores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Edumind. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;