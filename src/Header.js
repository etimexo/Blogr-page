import React, { useEffect } from "react";
import "./Header.css";
import Hamburger from "./icon-hamburger.svg";
import Down from "./icon-arrow-light.svg";
import 'bootstrap'
import Dark from "./icon-arrow-dark.svg"
export default function Header() {
  useEffect(() => {
    const toggler = document.querySelector(".toggler");
    const navMenu = document.querySelector(".nav-menu");

    const togglerFunction = () => {
        toggler.classList.toggle("active");
        navMenu.classList.toggle("active");

      };

    toggler.addEventListener("click", togglerFunction);
}, []);

const handleClickOutnavMenu = (event) => {
  const target = event.target;
  const navMenu = document.querySelector(".nav-menu");
  const toggler = document.querySelector(".toggler");
  const isNavMenuClicked =
    target.classList.contains("navMenu") || target.closest(".nav-menu");
  const isTogglerClicked =
    target.classList.contains("toggler") || target.closest(".toggler");
  if (!isNavMenuClicked && !isTogglerClicked) {
    toggler.classList.remove("active");
    navMenu.classList.remove("active");
  }
};
useEffect(() => {
  document.addEventListener("click", handleClickOutnavMenu);
  return () => {
    document.removeEventListener("click", handleClickOutnavMenu);
  };
}, []);
useEffect(() => {
  const connect = document.getElementById("connect");
  const dropdown1 = document.querySelector(".dropdown1");
  
  
  connect.addEventListener("mouseenter", () => {
    dropdown1.classList.toggle("active");
  })
  connect.addEventListener("mouseleave", () => {
    dropdown1.classList.remove("active");
  })
  const isMobileDevice = () => {
    return window.innerWidth <= 900
  }
  if (!isMobileDevice()) {
    

    connect.addEventListener("click", () => {

      if (dropdown1.classList.contains("active")) {
        dropdown1.classList.remove("active");
      } else {
        dropdown1.classList.toggle("active");
      }
    })

  }

})
  return (
    <header className="container-fluid">
      <nav className="container nav navbar">
        <div className="navbar-brand logo">Blogr</div>
        
        <div className="toggler">
          <img src={Hamburger} alt="..." />
        </div>

        <ul className="nav-menu">
          <li className="nav-item" id="product">
            <a href="header.jsx" className="nav-link">
              Product <span><img src={Down} alt="Dropdown arrow" /><img className="dark" src={Dark} alt="Dropdown arrow" /></span>
            </a>
          </li>
          <li className="nav-item" id="company">
            <a href="#" className="nav-link">
              Company <span><img src={Down} alt="Dropdown arrow" /><img className="dark" src={Dark} alt="Dropdown arrow" /></span>
            </a>
          </li>
          <li className="nav-item" id="connect">
            <a href="#" className="nav-link">
              Connect <span><img className="light" src={Down} alt="Dropdown arrow" /><img className="dark" src={Dark} alt="Dropdown arrow" /></span>
            </a>
            <span className="dropdown1">
              <div className="drop-img">Todo List</div>
              <div className="drop-img">Calendar</div>
              <div className="drop-img">Remiders</div>
              <div className="drop-img">Planning</div>
            </span>
          </li>
          <li className="nav-item login">
            <a href="#" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item signup">
            <button className="btn btn1">
            <a href="#" className="nav-link">
              Signup
            </a>
            </button>
          </li>
        </ul>
      </nav>
      <div className="content">
        <p className="modern">A modern <br className="break" /> publishing platform</p>
        <p className="m2">Grow your online audience and build your online brand</p>
        <div className="buttons row">
        <button className="btn btn1">Start for free</button>
        <button className="btn btn2">Learn More</button>
        </div>
      </div>
    </header>
  );
}
