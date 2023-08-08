import React from "react";
import "./Header.css";
import Hamburger from "./icon-hamburger.svg";
export default function Header() {
  return (
    <header className="container-fluid">
      <nav className="nav navbar">
        <div className="navbar-brand logo">Blogr</div>
        
        <div className="toggler">
          <img src={Hamburger} alt="..." />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Company
            </a>
          </li>
          <li className="nav-item connect">
            <a href="#" className="nav-link">
              Connect
            </a>
          </li>
          <li className="nav-item login">
            <a href="#" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item signup">
            <a href="#" className="nav-link">
              Signup
            </a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <p className="modern">A modern <br /> publishing platform</p>
        <p className="m2">Grow your online audience and build your online brand</p>
        <div className="buttons row">
        <button className="btn btn1 col-xs-6">Start for free</button>
        <button className="btn btn2 col-xs-6">Learn More</button>
        </div>
      </div>
    </header>
  );
}
