import React from 'react';
import "./App.css";
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Services from './Components/services/Services';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills/>
        <Services/>
      </main>
    </>
  )
}

export default App
