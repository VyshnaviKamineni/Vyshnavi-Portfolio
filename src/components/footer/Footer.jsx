import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Tirumala Sri Lakshmi Vyshnavi Devi Priya Kamineni</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonals" className="footer__link">Testimonials</a>
                </li>

            </ul>

            <div className="footer__social">

        <a href="https://www.instagram.com/vyshnavi_ammuu/" className='footer__social-link' target="_blank" rel="noreferrer">
            <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/vyshnavikamineni" className='footer__social-link' target="_blank" rel="noreferrer">
            <i class="bx bxl-linkedin"></i>
        </a>

        <a href="https://www.github.com/VyshnaviKamineni" className='footer__social-link' target="_blank" rel="noreferrer">
            <i class='bx bxl-github'></i>
        </a>
       </div>

       <p className="footer-text">© 2024 My Portfolio. All rights reserved. | Made by Vyshnavi</p>
       </div>
    </footer>
  )
}

export default Footer