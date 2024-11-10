// src/App.js
import React from 'react';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import FloatingNav from './components/FloatingNav'

import './styles.css';

function App() {
  return (
    <div className="App">
      <FloatingNav/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
