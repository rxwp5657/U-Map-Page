import React from 'react';
import logo from './Logo.png';
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import Navigation from '../Navigation/Navigation.js'
import './Header.css'

const Header = () => {
  return (
    <div class="header">
      <ScrollAnimation animateIn = "zoomIn">
        <img class="pv2 pt5" alt='Logo' src={logo}/>
        <Navigation />
      </ScrollAnimation>
    </div>
  );
}

export default Header;
