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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
