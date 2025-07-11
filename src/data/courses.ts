import React from 'react';
import { 
  Globe, 
  Code, 
  Database, 
  Smartphone 
} from 'lucide-react';

export interface Course {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  image: string;
  iconName: string;
  level: string;
  instructor: string;
  modules: string[];
  requirements: string[];
  whatYouLearn: string[];
  category: string;
  language: string;
  certificate: boolean;
  liveClasses: boolean;
  support: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    description: "Aprende las bases del desarrollo web con HTML5 y CSS3",
    longDescription: "Este curso te llevará desde los fundamentos más básicos hasta crear sitios web completos y responsivos. Aprenderás HTML5 semántico, CSS3 moderno con Flexbox y Grid, y las mejores prácticas de desarrollo web.",
    duration: "8 semanas",
    students: 1250,
    rating: 4.9,
    price: "$49",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
    iconName: "Globe",
    level: "Principiante",
    instructor: "María González",
    modules: [
      "Introducción a HTML5",
      "Estructura semántica",
      "CSS3 básico",
      "Flexbox y Grid",
      "Responsive Design",
      "Proyecto final"
    ],
    requirements: [
      "No se requiere experiencia previa",
      "Computadora con acceso a internet",
      "Editor de código (recomendamos VS Code)"
    ],
    whatYouLearn: [
      "Crear páginas web completas",
      "Diseño responsivo",
      "Mejores prácticas de SEO",
      "Optimización de rendimiento"
    ],
    category: "Frontend",
    language: "Español",
    certificate: true,
    liveClasses: true,
    support: true
  },
  {
    id: 2,
    title: "JavaScript Avanzado",
    description: "Domina JavaScript moderno y sus frameworks más populares",
    longDescription: "Sumérgete en el mundo del JavaScript moderno. Desde ES6+ hasta frameworks como React y Vue.js. Aprenderás programación asíncrona, manipulación del DOM, y desarrollo de aplicaciones web dinámicas.",
    duration: "12 semanas",
    students: 980,
    rating: 4.8,
    price: "$79",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
    iconName: "Code",
    level: "Intermedio",
    instructor: "Carlos Rodríguez",
    modules: [
      "JavaScript ES6+",
      "Programación asíncrona",
      "Manipulación del DOM",
      "APIs y AJAX",
      "React.js básico",
      "Proyecto final"
    ],
    requirements: [
      "Conocimientos básicos de HTML y CSS",
      "Lógica de programación",
      "Computadora con Node.js instalado"
    ],
    whatYouLearn: [
      "JavaScript moderno (ES6+)",
      "Programación asíncrona",
      "APIs REST",
      "Frameworks populares"
    ],
    category: "Frontend",
    language: "Español",
    certificate: true,
    liveClasses: true,
    support: true
  },
  {
    id: 3,
    title: "PHP & MySQL",
    description: "Desarrollo backend completo con PHP y bases de datos MySQL",
    longDescription: "Aprende a crear aplicaciones web completas con PHP y MySQL. Desde la configuración del servidor hasta el despliegue en producción. Incluye seguridad, autenticación y APIs REST.",
    duration: "10 semanas",
    students: 756,
    rating: 4.7,
    price: "$69",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    iconName: "Database",
    level: "Intermedio",
    instructor: "Ana Martínez",
    modules: [
      "Fundamentos de PHP",
      "Bases de datos MySQL",
      "CRUD operations",
      "Autenticación y seguridad",
      "APIs REST",
      "Despliegue"
    ],
    requirements: [
      "Conocimientos básicos de HTML",
      "Lógica de programación",
      "Servidor local (XAMPP/WAMP)"
    ],
    whatYouLearn: [
      "Desarrollo backend completo",
      "Bases de datos relacionales",
      "Seguridad web",
      "APIs REST"
    ],
    category: "Backend",
    language: "Español",
    certificate: true,
    liveClasses: true,
    support: true
  },
  {
    id: 4,
    title: "Python para Principiantes",
    description: "Inicia tu carrera en programación con Python",
    longDescription: "Python es el lenguaje perfecto para comenzar en programación. Aprenderás desde los conceptos básicos hasta crear aplicaciones web con Django y Flask. Ideal para principiantes absolutos.",
    duration: "6 semanas",
    students: 1450,
    rating: 4.9,
    price: "$39",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
    iconName: "Code",
    level: "Principiante",
    instructor: "Luis Pérez",
    modules: [
      "Fundamentos de Python",
      "Estructuras de datos",
      "Programación orientada a objetos",
      "Django básico",
      "Flask básico",
      "Proyecto final"
    ],
    requirements: [
      "No se requiere experiencia previa",
      "Computadora con Python instalado",
      "Editor de código"
    ],
    whatYouLearn: [
      "Programación desde cero",
      "Lógica de programación",
      "Frameworks web",
      "Desarrollo de aplicaciones"
    ],
    category: "Backend",
    language: "Español",
    certificate: true,
    liveClasses: true,
    support: true
  },
  {
    id: 5,
    title: "Desarrollo Mobile",
    description: "Crea aplicaciones móviles nativas y multiplataforma",
    longDescription: "Aprende a desarrollar aplicaciones móviles para iOS y Android. Desde React Native hasta desarrollo nativo. Incluye diseño de UI/UX móvil y publicación en tiendas de aplicaciones.",
    duration: "14 semanas",
    students: 623,
    rating: 4.8,
    price: "$99",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
    iconName: "Smartphone",
    level: "Avanzado",
    instructor: "Sofia Chen",
    modules: [
      "React Native",
      "UI/UX móvil",
      "APIs nativas",
      "Estado y navegación",
      "Testing y debugging",
      "Publicación"
    ],
    requirements: [
      "Conocimientos de JavaScript",
      "Computadora con Node.js",
      "Dispositivo móvil para testing"
    ],
    whatYouLearn: [
      "Desarrollo multiplataforma",
      "UI/UX móvil",
      "APIs nativas",
      "Publicación de apps"
    ],
    category: "Mobile",
    language: "Español",
    certificate: true,
    liveClasses: true,
    support: true
  },
  {
    id: 6,
    title: "React & Node.js",
    description: "Stack completo para aplicaciones web modernas",
    longDescription: "Domina el stack MERN completo. Aprende React para el frontend y Node.js con Express para el backend. Incluye MongoDB, autenticación JWT, y despliegue en la nube.",
    duration: "16 semanas",
    students: 892,
    rating: 4.9,
    price: "$119",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
    iconName: "Globe",
    level: "Avanzado",
    instructor: "David Kim",
    modules: [
      "React avanzado",
      "Node.js y Express",
      "MongoDB",
      "Autenticación JWT",
      "APIs RESTful",
      "Despliegue"
    ],
    requirements: [
      "Conocimientos de JavaScript",
      "HTML y CSS",
      "Computadora con Node.js"
    ],
    whatYouLearn: [
      "Stack MERN completo",
      "APIs RESTful",
      "Autenticación segura",
      "Despliegue en la nube"
    ],
    category: "Full Stack",
    language: "Español",
    certificate: true,
    liveClasses: true,
    support: true
  }
];

export const getCourseById = (id: number): Course | undefined => {
  return courses.find(course => course.id === id);
}; 