import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (

    <nav id="header" className="header d-flex align-items-center light-background sticky-top  ">
    <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
   <h1 className="sitename">Soniya Resume</h1>
       </Link>


      <nav id="navmenu" className="navmenu">
        <ul>
          <li>  <Link to="/" >Home</Link></li>
          <li>  <Link to="/about">About</Link></li>
          <li>  <Link to="/resume">Resume</Link></li>
          <li>  <Link to="/services">Services</Link></li>
          <li>  <Link to="/portfolio">Portfolio</Link></li>
          <li>  <Link to="/contact">Contact</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div className="header-social-links">
          <Link to="https://x.com/soniyapal7?t=lP5bv-945_1xfneBVhQVgA&s=08" className="twitter" target="_blank"><i className="bi bi-twitter"></i></Link>
          <Link to="https://www.linkedin.com/in/soniya-pal" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></Link>
      </div>

    </div>
</nav>

  );
};

export default Navbar;