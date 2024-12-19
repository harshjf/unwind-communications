"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/bannerstyle.css";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Default duration for animations
      easing: "ease-in-out", // Smooth easing
      once: true, // Animation triggers only once
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
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
            <div
              className="col-lg-5 col-md-12 image-banner-container"
              style={{ paddingLeft: "0px" }}
            >
              {isMobile && (
                <div className="mobile-image-container">
                  <img
                    src="/images/home/shefali_saree.jpg"
                    alt="Shefali 1"
                    className="shefali1-image"
                  />
                </div>
              )}

              <div className="banner-border-wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="main-banner-content">
                  <div>
                    <h1 className="founder">ABOUT THE FOUNDER-</h1>
                    <h1 className="shefali">SHEFALI SAXENA</h1>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <ul class="custom-list">
                      <li>
                        <b>Academic Excellence:</b>
                        <p>
                          MSc (Gold Medalist) and UGC NET-qualified in Life
                          Sciences, showcasing a strong academic foundation.
                        </p>
                      </li>
                      <li>
                        <b>Creative Visionary:</b>
                        <p>
                          Award-winning Artistpreneur and founder of Unwind
                          Communications, redefining destination and venue
                          promotion through musical storytelling and
                          professionally crafted audio-visual content.
                        </p>
                      </li>
                      <li>
                        <b>Recognized Talent:</b>
                        <p>
                          Honored as Artist of the Week by BIG FM and MX Player
                          for groundbreaking contributions to the creative arts.
                        </p>
                      </li>
                      <li>
                        <b>Extensive Portfolio:</b>
                        <p>
                          Produced 14 music videos, delivered over 1,200 live
                          performances, and collaborated with ministries and
                          leading corporate entities.
                        </p>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {!isMobile && (
              <div
                className="col-lg-7 col-md-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "180px",
                  height: "100%",
                }}
              >
                <a href="#">
                  <div
                    className="card"
                    data-aos="pop-right"
                    data-aos-duration="1000"
                    style={{ border: "none" }}
                  >
                    <div className="wrapper">
                      <img
                        src="/images/home/shefali_saree.jpg"
                        className="cover-image"
                        alt="Shefali 1 Cover"
                      />
                    </div>

                    <img
                      src="/images/home/shefali_saree-nobg.png"
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
