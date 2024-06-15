import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (header) {
                if (window.scrollY >= 80) {
                    header.classList.add("scroll-header");
                } else {
                    header.classList.remove("scroll-header");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={`navbar ${isMenuOpen ? 'menuOpen' : ''}`} id='navbar'>
                <div className="logo">
                    <h1>Tirumala Sri Lakshmi Vyshnavi Devi Priya Kamineni</h1>
                </div>
                <div className="navlist">
                    <ul>
                        <a href="#home" className="link"><li>Home</li></a> 
                        <a href="#about" className="link"><li>About</li></a> 
                        <a href="#skills" className="link"><li>Skills</li></a>
                        <a href="#qualification" className="link"><li>Qualification</li></a>
                        <a href="#portfolio" className="link"><li>Projects</li></a> 
                        <a href="#contact" className="link"><li>Contact</li></a> 
                    </ul>
                </div>
                <div className="menuIcon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="hamburgermenu">
                    <ul>
                        <a href="#home" className="link"><li>Home</li></a> 
                        <a href="#about" className="link"><li>About</li></a> 
                        <a href="#skills" className="link"><li>Skills</li></a>
                        <a href="#qualification" className="link"><li>Qualification</li></a>
                        <a href="#project" className="link"><li>Projects</li></a> 
                        <a href="#contact" className="link"><li>Contact</li></a> 
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
