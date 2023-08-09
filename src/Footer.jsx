import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="logo">Blogr</div>
      <div className="product">
        <ol>
          <li className="title">Produce</li>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ol>
      </div>
      <div className="company">
        <ol>
        <li className="title">Company</li>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ol>
      </div>
      <div className="connect">
        <ol>
        <li className="title">Connect</li>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ol>
      </div>
    </footer>
  );
}
