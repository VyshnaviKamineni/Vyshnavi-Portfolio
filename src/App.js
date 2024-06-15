import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Project from './components/project/Project';
import Testimonials from './components/testimonals/Testimonals';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

function App() {
  return (
    <>
    <main className='main'>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Project/>
      <Testimonials/>
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    </>
  );
}

export default App;