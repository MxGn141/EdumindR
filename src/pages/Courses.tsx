import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedLevel, setSelectedLevel] = useState('Todos');

  const categories = ['Todos', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];
  const levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Todos' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nuestros Cursos
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Explora nuestra colección completa de cursos de programación y desarrollo web
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">No se encontraron cursos</h3>
              <p className="text-slate-600">Intenta ajustar tus filtros de búsqueda</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
                </h2>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filtros aplicados</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-700 mb-2">{courses.length}</div>
              <div className="text-slate-600">Cursos Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-700 mb-2">4</div>
              <div className="text-slate-600">Categorías</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-700 mb-2">3</div>
              <div className="text-slate-600">Niveles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-700 mb-2">4.8</div>
              <div className="text-slate-600 flex items-center justify-center">
                <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                Rating Promedio
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses; 