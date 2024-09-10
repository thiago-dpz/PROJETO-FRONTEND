import React from 'react';
import './Header.css';


const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='header flex flex-col' id='home'>
        

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>research, popular science, conservation</h2>
                <h1 className='text-white fw-6 header-title'>Welcome! <span className='text-green fw-8'>The most successful snake conservation project.</span> Based in São Paulo, Brazil.</h1>
                <div className='btn-groups flex'>
                    <button type = "button" className='btn-item bg-green fw-5 ls-2' onClick={() => scrollToSection('aboutWork')}>See Our Work</button>
                    <button type = "button" className='btn-item bg-dark fw-4 ls-2' onClick={() => scrollToSection('work')}>See the Week</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header