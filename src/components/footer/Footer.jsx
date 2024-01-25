import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toDateString());
  }, []);

  return (
    <footer>
      <a className="footer__logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#experience">Technologies</a>
        </li>
        <li>
          <a href="#portfolioo">Recent Projects</a>
        </li>
        <li>Email @ abhijeet.gawade@nyu.edu</li>
      </ul>
      <div className="footer__copyright">
        <small>Built with ❤️ by Abhijeet</small>
      </div>
    </footer>
  );
};

export default Footer;
