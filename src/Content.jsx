import React from "react";
import "./Content.css";
import Image from "./illustration-editor-mobile.svg";
import Editord from "./illustration-editor-desktop.svg";

export default function Body() {
  return (
    <div className="body">
      <p className="titles">Designed for the future</p>
      <div className="img-mobile">
        <img className="em" src={Image} alt="Editor. Mobile version" />
      </div>
      <div className="row">
        <div className="col">
          <p className="titles">
          Introducing an <br /> extensible editor
          </p>
          <p>
            Blogr features an exceedingly intuitive interface which lets you focus
            on one thing: creating content. The editor supports management of
            multiple blogs and allows easy manipulation of embeds such as images,
            videos, and Markdown. Extensibility with plugins and themes provide easy
            ways to add functionality or change the looks of a blog.
          </p>
          <p className="titles">
            Robust content <br /> management
          </p>
          <p>
            Flexible content management enables users to easily move through posts.
            Increase the usability of your blog by adding customized categories,
            sections, format, or flow. With this functionality, you’re in full
            control.
          </p>
        </div>
        <div className="col ed">
          <img src={Editord} alt="Editor desktop version" />
        </div>
      </div>
    </div>
  );
}
