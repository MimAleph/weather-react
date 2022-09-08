import React from "react";

export default function Footer() {
  return (
    <div class="footer">
      <a class="github-link" href="https://github.com/MimAleph/weather-react">
        Open-source code
      </a>
      , by{" "}
      <a class="coder" href="https://linktr.ee/MaryamAleph" target="blank">
        {" "}
        Maryam Aleph
      </a>{" "}
      and hosted on{" "}
      <a
        class="netlify-link"
        href="https://voluble-macaron-ed03d0.netlify.app/"
        target="blank"
      >
        Netlify
      </a>
    </div>
  );
}
