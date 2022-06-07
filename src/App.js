// libraries
import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
// styling
import './App.css';
// components
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
// pages
import Home from './pages/index';
import Product from './pages/product';
import About from './pages/about';
import Contact from './pages/contact';
import ScrollToTop from './components/config/ScrollToTop';

function App() {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
