"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
      mirror: true,
    });
  }, []);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <>
      <div className="banner3-container">
        <div className="banner3-overlay" />
        <div className="banner3-inner">
          <div className="banner3-left">
            <h1
              className="banner3-title"
              data-aos="fade-right"
              data-aos-once="false"
            >
              <span style={{ color: "#973d5d" }}>UNWIND</span> <br />
              <span style={{ color: "#fff" }}>COMMUNICATIONS</span>
            </h1>
            <h1
              className="banner3-title2"
              data-aos="fade-right"
              data-aos-once="false"
            >
              <span style={{ color: "#973d5d" }}>YOU BUILD,</span>
              <span style={{ color: "#fff" }}>We SHOWCASE!</span>
            </h1>
          </div>
          <div className="banner3-right" data-aos="fade-left">
            <div
              className="video-overlay"
              onClick={() =>
                window.open("https://linktr.ee/shefalisaxenaofficial", "_blank")
              }
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0)",
                zIndex: 10,
              }}
            >
              {" "}
            </div>
            <video
              className="banner3-video"
              src="/videos/banner_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="banner3-description">
          {/* <p>
            We bring India&apos;s most captivating destinations and venues to
            life on digital platforms, creating a visual journey that resonates
            across the globe. At UNWIND COMMUNICATIONS, we redefine experiential
            marketing, led by the extraordinary Award Winning ARTISTPRENEUR,
            Shefali Saxena, whose work has set new benchmarks in the industry.
          </p> */}
          <p>
            Led by the Award-Winning{" "}
            <span style={{ color: "#973d5d" }}>
              <b>ARTISTPRENEUR</b>
            </span>{" "}
            Shefali Saxena, we bring India&apos;s most captivating destinations
            to life through{" "}
            <span style={{ color: "#973d5d" }}>
              <b>digital storytelling</b>
            </span>
            , redefining experiential marketing with bespoke{" "}
            <span style={{ color: "#973d5d" }}>
              <b>musical videos</b>
            </span>
            ,{" "}
            <span style={{ color: "#973d5d" }}>
              <b>vlogs</b>
            </span>
            , and{" "}
            <span style={{ color: "#973d5d" }}>
              <b>strategic promotion</b>
            </span>
            .
          </p>
        </div>
        <div className="banner1-shape2">
          <img src="/images/banner1-shape5.png" alt="Animated Shape" />
        </div>
      </div>
    </>
  );
};

export default Banner2;
