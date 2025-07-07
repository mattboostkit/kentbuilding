import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Service Pages
import ExtensionsPage from './pages/services/ExtensionsPage';
import RestorationRefurbishmentPage from './pages/services/RestorationRefurbishmentPage';
import NewBuildsPage from './pages/services/NewBuildsPage';
import HeritageListedPage from './pages/services/HeritageListedPage';
import LandscapingAndPatiosPage from './pages/services/LandscapingAndPatiosPage';
import StructuralRepairsPage from './pages/services/StructuralRepairsPage';
import KitchensBathroomsPage from './pages/services/KitchensBathroomsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/extensions" element={<ExtensionsPage />} />
            <Route path="/services/restoration-refurbishment" element={<RestorationRefurbishmentPage />} />
            <Route path="/services/new-builds" element={<NewBuildsPage />} />
            <Route path="/services/heritage-listed" element={<HeritageListedPage />} />
            <Route path="/services/landscaping-and-patios" element={<LandscapingAndPatiosPage />} />
            <Route path="/services/structural-repairs" element={<StructuralRepairsPage />} />
            <Route path="/services/kitchens-bathrooms" element={<KitchensBathroomsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;