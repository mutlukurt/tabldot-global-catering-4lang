import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Order from './pages/Order';
import Testimonials from './pages/Testimonials';
import Health from './pages/Health';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'order':
        return <Order />;
      case 'testimonials':
        return <Testimonials />;
      case 'health':
        return <Health />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main role="main">{renderPage()}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
