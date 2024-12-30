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
    height: "100%", // Matches the iframe height
    width: "100%", // Matches the iframe width
    playerVars: {
      autoplay: 1, // Autoplay video
      mute: 1, // Mute video
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
              <span style={{ color: "#973d5d" }}>YOU BUILD,</span> <br />
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
                backgroundColor: "rgba(0, 0, 0, 0)", // Transparent overlay
                zIndex: 10, // Ensure it sits above the iframe
              }}
            >
              {" "}
            </div>

            {/* <iframe
              className="banner3-video"
              // src="https://www.youtube.com/embed/_wGWmbJpSVQ?autoplay=1&mute=1&loop=1&playlist=_wGWmbJpSVQ&cc_load_policy=0"
              src="https://www.youtube.com/embed/_wGWmbJpSVQ?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=_wGWmbJpSVQ&cc_load_policy=0"
              title="Unwind Communication Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "relative", zIndex: 1 }}
            /> */}

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

            {/*   <YouTube videoId="_wGWmbJpSVQ" opts={opts} /> */}
          </div>
        </div>
        <div className="banner3-description">
          <p>
            We bring India&apos;s most captivating destinations and venues to
            life on digital platforms, creating a visual journey that resonates
            across the globe. At UNWIND COMMUNICATIONS, we redefine experiential
            marketing, led by the extraordinary Award Winning ARTISTPRENEUR,
            Shefali Saxena, whose work has set new benchmarks in the industry.
          </p>
        </div>
        <div className="banner1-shape2">
          <img
            src="/images/banner1-shape5.png"
            alt="Animated Shape"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Banner2;
