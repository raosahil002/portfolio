import './navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';

const Navbar = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavbarBlur(true);
    } else {
      setNavbarBlur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName('bar');
    var ham = document.getElementsByClassName('navbar-links');
    bar[0].classList.toggle('bar-one');
    bar[1].classList.toggle('bar-two');
    bar[2].classList.toggle('bar-three');

    ham[0].classList.toggle('showNavbar');
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName('bar');
    var ham = document.getElementsByClassName('navbar-links');
    bar[0].classList.remove('bar-one');
    bar[1].classList.remove('bar-two');
    bar[2].classList.remove('bar-three');
    ham[0].classList.remove('showNavbar');
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <nav className={navbarBlur ? 'navbar blur' : 'navbar'}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="logo"
      >
        Sahil
      </h1>

      <div className="hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="navbar-links">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/about">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/project">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/resume">
            <CgFileDocument /> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
