import { useState, useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Services = lazy(() => import('./pages/Services'));
const Order = lazy(() => import('./pages/Order'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Health = lazy(() => import('./pages/Health'));
const About = lazy(() => import('./pages/About'));

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
        return (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div></div>}>
            <Services />
          </Suspense>
        );
      case 'order':
        return (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div></div>}>
            <Order />
          </Suspense>
        );
      case 'testimonials':
        return (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div></div>}>
            <Testimonials />
          </Suspense>
        );
      case 'health':
        return (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div></div>}>
            <Health />
          </Suspense>
        );
      case 'about':
        return (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div></div>}>
            <About />
          </Suspense>
        );
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main id="main-content" role="main">{renderPage()}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
