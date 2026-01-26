import React from 'react';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Process from './components/Process';
import Reports from './components/Reports';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Problems />
      <Solution />
      <Process />
      <Reports />
      <Footer />
    </div>
  );
}

export default App;
