import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí normalmente enviarías el formulario a un backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "hola@edumind.com",
      description: "Envíanos un email y te responderemos en 24 horas"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+1 (555) 123-4567",
      description: "Llámanos de lunes a viernes de 9:00 AM a 6:00 PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Oficina",
      info: "Madrid, España",
      description: "Visítanos en nuestra oficina principal"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      info: "Lun - Vie: 9:00 - 18:00",
      description: "Soporte disponible en horario de oficina"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte. Envíanos un mensaje 
            y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800">¡Mensaje enviado con éxito! Te responderemos pronto.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Información de Cursos">Información de Cursos</option>
                    <option value="Soporte Técnico">Soporte Técnico</option>
                    <option value="Preguntas Generales">Preguntas Generales</option>
                    <option value="Sugerencias">Sugerencias</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Estamos aquí para ayudarte con cualquier pregunta que tengas sobre 
                  nuestros cursos, servicios o cualquier otra consulta.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-slate-100 p-3 rounded-full text-slate-700">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-slate-700 font-medium mb-1">{info.info}</p>
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Preguntas Frecuentes</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors">
                    ¿Cómo funciona la plataforma?
                  </a>
                  <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors">
                    ¿Qué métodos de pago aceptan?
                  </a>
                  <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors">
                    ¿Ofrecen certificados?
                  </a>
                  <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors">
                    ¿Puedo cancelar mi suscripción?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestra Ubicación</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Visítanos en nuestra oficina principal en Madrid, España. 
              Estamos disponibles para reuniones y consultas presenciales.
            </p>
          </div>
          
          <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Mapa interactivo aquí</p>
              <p className="text-sm text-slate-500 mt-2">
                Calle de la Programación, 123<br />
                Madrid, España 28001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu viaje?
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya han transformado sus carreras con Edumind
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors">
              Explorar Cursos
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors">
              Hablar con un Asesor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 