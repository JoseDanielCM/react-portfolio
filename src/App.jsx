// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import FloatingNavDemo from './components/FloatingNavDemo'

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingNavDemo/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
