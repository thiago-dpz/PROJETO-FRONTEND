import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);
  const [scrollPos, setScrollPos] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrollPos(document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 0);
    }
  };

  return (
    <nav className={scrollPos > 100 ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='navbar-content'>
          <div className='brand-and-toggler flex flex-sb'>
            <Link to="/" className='navbar-brand text-uppercase fw-7 text-white ls-2 fs-22' onClick={scrollToTop}>Ophidium</Link>
            <button type="button" className='navbar-open-btn text-white' onClick={() => setNavToggler(!navToggler)}>
              <FaBars size={30} />
            </button>

            <div className={navToggler ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
              <button type="button" className='navbar-close-btn text-white' onClick={closeNavbar}>
                <FaTimes size={30} />
              </button>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to="/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22' onClick={() => scrollToSection('home')}>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22' onClick={() => scrollToSection('services')}>Services</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22' onClick={() => scrollToSection('workprocess')}>Work Process</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22' onClick={() => scrollToSection('contact')}>Contact Us</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/aboutUs" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;