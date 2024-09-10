// script
import './assets/js/script';

// components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Newsletter from './components/Newsletter/Newsletter';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';

// rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <>
      <Header />
      <Services />
      <Work />
      <WorkProcess />
      <Newsletter />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutUs" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;