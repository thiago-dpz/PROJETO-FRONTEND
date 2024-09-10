import React from 'react';
import './Footer.css';
import { FaSquareFacebook, FaSquareXTwitter, FaYoutube, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer bg-black section-p' id='socialmedia'>
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-green'>Follow <span className='text-white'>Us</span></h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c'>
                    <li>
                        <a href="/" className='text-white'>
                            <FaSquareFacebook size={30}/>
                        </a>
                    </li>
                    <li>
                        <a href="/" className='text-white'>
                            <FaSquareXTwitter size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="/" className='text-white'>
                            <FaYoutube size={37}/>
                        </a>
                    </li>
                    <li>
                        <a href="/" className='text-white'>
                            <FaSquareInstagram size={30} />
                        </a>
                    </li>
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer