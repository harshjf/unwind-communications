"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/bannerstyle.css";
import Link from "next/link";
import { AboutTheFounderData } from "@/utils/Home/DataOfAboutTheFounder/AboutTheFounderData";

const AboutTheFounder = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",
      once: true,
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
                    style={{ paddingLeft: "8spx" }}
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
                    <h1 style={{ color: "#041d33" }}>
                      <b>{AboutTheFounderData.title.main}</b>
                    </h1>
                    <h1 style={{ color: "#973d5d" }}>
                      <b>{AboutTheFounderData.title.highlight}</b>
                    </h1>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <ul className="custom-list">
                      {AboutTheFounderData.listItems.map((text, idx) => {
                        return (
                          <li key={idx}>
                            <b>{text.title}</b>
                            <p>{text.content}</p>
                          </li>
                        );
                      })}
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
          <p className="custom-about-company-btn">
            <Link className="about-company-btn" href="/about#about-founder">
              <span>View more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="18"
                height="18"
                x="0"
                y="0"
                viewBox="0 0 32 32"
              >
                <g>
                  <path
                    d="M26.68 3.867H8.175a1 1 0 0 0 0 2h16.544L4.2 26.387A1 1 0 1 0 5.613 27.8l20.52-20.52v16.545a1 1 0 0 0 2 0V5.321a1.456 1.456 0 0 0-1.453-1.454z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutTheFounder;
