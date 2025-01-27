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
                      Unwind Communications is an experiential marketing agency
                      in Mumbai, India that specializes in event planning and
                      management, digital marketing, and media PR.
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
                    <li>
                      <Link href="/radio-interviews">Radio Interviews</Link>
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
                      B 501, Mota Mansion, Andheri West, Mumbai - 400058 (4th
                      Cross Lane, Opp VIP Luggage Lane)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>
                      Copyright &copy; {currentYear}, All Rights Reserved Unwind
                      Communications
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/terms">Terms</Link>
                      </li>
                      <li>
                        <Link href="/privacy">Privacy</Link>
                      </li>
                      <li>
                        <Link href="/policy">Policy</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
