import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        className="github-link"
        href="https://github.com/MimAleph/weather-react"
        target="_blank"
      >
        Open-source code
      </a>
      , by{" "}
      <a className="coder" href="https://linktr.ee/MaryamAleph" target="_blank">
        {" "}
        Maryam Aleph
      </a>{" "}
      and hosted on{" "}
      <a
        className="netlify-link"
        href="https://voluble-macaron-ed03d0.netlify.app/"
        target="_blank"
      >
        Netlify
      </a>
    </div>
  );
}
