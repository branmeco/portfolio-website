import React from 'react';
import "./App.css";
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
