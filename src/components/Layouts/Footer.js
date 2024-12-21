"use client";

import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>Copyright &copy;{currentYear} Unwind Communications.</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/shefalisaxenaofficial/#"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/shefalisaxena"
                    target="_blank"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/shefalisaxenaofficial/"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/shefalisaxenaofficial"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
