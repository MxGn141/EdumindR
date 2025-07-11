import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cursos" element={<Courses />} />
              <Route path="/curso/:id" element={<CourseDetail />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;