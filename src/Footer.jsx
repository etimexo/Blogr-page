import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="logo">Blogr</div>
      <div className="product">
        <ul className="ulf">
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className="company">
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="connect">
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}
