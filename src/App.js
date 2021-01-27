import './App.css';
import React from "react";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Sections';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


function App() {
  return (
    <>
      <Header id='header' />
      <Section id='section' />
      <AboutUs id='about' />
      <OurServices id='services' />
      <Footer id='footer' />
    </>
  );
}

export default App;
