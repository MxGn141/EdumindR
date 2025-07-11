import React from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  Globe,
  BookOpen,
  Star,
  CheckCircle
} from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "María González",
      role: "CEO & Fundadora",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Experta en educación tecnológica con más de 10 años de experiencia."
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Tecnología",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Desarrollador full-stack con pasión por enseñar programación."
    },
    {
      name: "Ana Martínez",
      role: "Directora de Contenido",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Especialista en crear contenido educativo de alta calidad."
    },
    {
      name: "Luis Pérez",
      role: "Instructor Senior",
      image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Pythonista apasionado por hacer la programación accesible para todos."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pasión por la Educación",
      description: "Creemos que la educación tecnológica debe ser accesible para todos."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Resultados Medibles",
      description: "Nuestros estudiantes logran objetivos concretos en sus carreras."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Alcance Global",
      description: "Llegamos a estudiantes de todo el mundo con nuestra plataforma."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Contenido Actualizado",
      description: "Mantenemos nuestros cursos al día con las últimas tecnologías."
    }
  ];

  const stats = [
    { number: "15,000+", label: "Estudiantes Satisfechos" },
    { number: "50+", label: "Cursos Especializados" },
    { number: "25+", label: "Instructores Expertos" },
    { number: "98%", label: "Tasa de Satisfacción" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Sobre Edumind
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Somos una plataforma educativa comprometida con transformar vidas a través 
            de la educación tecnológica de calidad. Nuestra misión es hacer que la 
            programación sea accesible para todos.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Democratizar el acceso a la educación tecnológica de calidad, 
                proporcionando herramientas y conocimientos que permitan a nuestros 
                estudiantes desarrollar carreras exitosas en el mundo digital.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Creemos que la programación no debe ser un privilegio, sino una 
                habilidad accesible para todos aquellos que quieran aprender y crecer.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Ser la plataforma líder en educación tecnológica en español, 
                reconocida por la calidad de nuestro contenido y el éxito de 
                nuestros estudiantes en el mercado laboral.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Aspiramos a formar la próxima generación de desarrolladores, 
                innovadores y líderes tecnológicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-slate-100 p-3 rounded-full w-fit mb-6 text-slate-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Conoce a los expertos que hacen posible nuestra misión educativa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-slate-600 mb-3">{member.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Quieres ser parte de nuestro equipo?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Únete a nosotros en nuestra misión de transformar la educación tecnológica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors">
              Ver Oportunidades
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 