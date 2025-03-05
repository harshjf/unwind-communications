"use client";

import React from "react";
import logo from "/public/images/logounwind.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              {/* Logo Section */}
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <div>
                      <Image
                        src={logo}
                        className="img-fluid"
                        alt="Unwind Logo"
                      />
                    </div>
                  </div>
                  <div className="footer-text">
                    <p>
                      UNWIND COMMUNICATIONS stands as a premier Experiential
                      Marketing Agency, helmed by the illustrious Artistpreneur,
                      Shefali Saxena. Merging her expertise and inventiveness,
                      she transforms venues into compelling narratives, crafting
                      unparalleled experiences that amplify visibility and
                      unlock new business opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Useful Links Section */}
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget ">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/recognition">Recognition</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Address Section */}
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Address</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      404-Abhay steel house,
                      <br /> Baroda Street, <br />
                      Masjid East,
                      <br /> Bombay - 400009
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="copyright-area">
            <div className="container" style={{ textAlign: "center" }}>
              <div className="copyright-text">
                <p>
                  Copyright &copy; {currentYear}, All Rights Reserved Unwind
                  Communications
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
