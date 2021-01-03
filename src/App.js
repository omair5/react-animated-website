import './App.css';
import React from "react";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Sections';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';

function App() {
  return (
    <>
      <Header />
      <Section />
      <AboutUs />
      <OurServices />
    </>
  );
}

export default App;
