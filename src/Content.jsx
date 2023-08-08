import React from "react";
import "./Content.css";
import Image from "./illustration-editor-mobile.svg";
import Editord from "./illustration-editor-desktop.svg";
import Phone from "./illustration-phones.svg";
import Laptopd from "./illustration-laptop-desktop.svg";
import Laptopm from "./illustration-laptop-mobile.svg";

export default function Body() {
  return (
    <div className="body">
      <p className="titles">Designed for the future</p>
      <div className="img-mobile">
        <img
          className="em img-responsive"
          src={Image}
          alt="Editor. Mobile version"
        />
      </div>
      <div className="row">
        <div className="col col-1">
          <p className="titles">Introducing an extensible editor</p>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <p className="titles">Robust content management</p>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </div>
        <img
          className="edd img-responsive ed"
          src={Editord}
          alt="Editor desktop version"
        />
      </div>
      <div className="phoneback">
        <img className="phone" src={Phone} alt="Alt" />
        <div className="state">
          <p>
            <span className="titles">State of the Art Infrastructure</span>{" "}
            <br /> <br /> With reliability and speed in mind, worldwide data
            centers provide the backbone for ultra-fast connectivity. This
            ensures your site will load instantly, no matter where your readers
            are, keeping your site competitive.
          </p>
        </div>
      </div>
      <div className="last">
        <img className="laptopd" src={Laptopd} alt="A laptop" />
        <div className="lastp">
          <p className="titles">Free, open, simple</p>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <p className="titles">Powerful tooling</p>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
}
