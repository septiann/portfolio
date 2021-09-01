import React, { useState } from 'react';

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

import './app.scss';

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
