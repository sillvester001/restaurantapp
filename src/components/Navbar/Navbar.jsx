import React from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import './Navbar.css';
import images from '../../constants/images';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="navbar__logo">
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#">Home</a></li>
      <li className="p__opensans"><a href="#">About</a></li>
      <li className="p__opensans"><a href="#">Menu</a></li>
      <li className="p__opensans"><a href="#">Awards</a></li>
      <li className="p__opensans"><a href="#">Contacts</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Login / Register</a>
      <div />
      <a href="#" className='p__opensans'>Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' size={30} onClick={() =>{}} />
      <div className= 'app__navabar-smallscreen_overlay flex_center slide-bottom'>
        <MdOutlineRestaurantMenu color='#fff' size={30} className='overlay__close' onClick={() =>{}} />
      </div>
      <ul className="app__navbar-smallscreen-links">
        <li className="p__opensans"><a href="#">Home</a></li>
        <li className="p__opensans"><a href="#">About</a></li>
        <li className="p__opensans"><a href="#">Menu</a></li>
        <li className="p__opensans"><a href="#">Awards</a></li>
        <li className="p__opensans"><a href="#">Contacts</a></li>
      </ul>
    </div>
  </nav >
);

export default Navbar;
