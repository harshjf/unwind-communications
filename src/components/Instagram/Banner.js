"use client";

import React, { useState, useEffect } from "react";
import "../../../styles/bannerstyle.css";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div id="home" className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="arrow-container">
                <img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="animated-arrow"
                />
              </div>

              {/* Add mobile-specific image */}
              {isMobile && (
                <div className="mobile-image-container">
                  <img
                    src="/images/home/shefali1.jpg"
                    alt="Shefali 1"
                    className="shefali1-image"
                  />
                </div>
              )}

              {/* Main content, always visible */}
              <div className="banner-border-wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="main-banner-content">
                  <div className="name-box">
                    <h1 style={{ color: "#041d33" }}>Hi, I&apos;m</h1>
                    <h1 style={{ color: "#973d5d" }}>Shefali Saxena</h1>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    Award-winning Artistpreneur and founder of Unwind
                    Communications, redefining destination and venue promotion
                    through musical storytelling and professionally crafted
                    audio-visual content.
                  </p>
                </div>
              </div>
            </div>

            {!isMobile && (
              <div
                className="col-lg-7 col-md-12"
                style={{
                  paddingTop: "500px", // Adjust spacing for mobile
                }}
              >
                <a href="#">
                  <div className="card" style={{ border: "none" }}>
                    <div className="wrapper">
                      <img
                        src="/images/home/shefali1.jpg"
                        className="cover-image"
                        alt="Shefali 1 Cover"
                      />
                    </div>

                    <img
                      src="/images/home/shefali.png"
                      className="character"
                      alt="Shefali Character"
                    />
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
