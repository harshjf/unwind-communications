"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration
      once: false, // Allow the animation to re-trigger
      mirror: true, // Re-trigger animations when scrolling back up
    });
  }, []);

  return (
    <>
      <div className="banner-container">
        <div className="container-image">
          <div className="arrow-icon">
            <img
              src="/images/down-arrow.png"
              alt="Down Arrow"
              width={50}
              height={50}
              className="down-arrow"
            />
          </div>

          {/* Image Container */}
          <div className="image-container">
            <img
              src="/images/backgroundbanner.png"
              className="curved-image"
              alt="Background"
            />
            <div className="rotating-image-container">
              <img
                src="/images/Heading.png"
                alt="Heading Image"
                width={200}
                height={200}
                className="rotating-image"
              />

              <div className="play-button-container">
                <img
                  src="/images/play-button.png"
                  alt="Play Button"
                  width={50}
                  height={50}
                  className="play-button"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://youtu.be/mwEZkRvjRC8?si=M9z5IJxbbNbFfUWZ"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banner-text-container">
          <h1
            className="banner-one__title-one"
            data-aos="fade-right"
            data-aos-once="false"
          >
            Unwind Communication
          </h1>
          <p
            className="banner-description"
            data-aos="fade-up"
            data-aos-once="false"
            style={{ textAlign: "left" }}
          >
            We bring India&apos;s most captivating destinations and venues to
            life on digital platforms, creating a visual journey that resonates
            across the globe. At UNWIND COMMUNICATIONS, we redefine experiential
            marketing, led by the extraordinary AwardWinning ARTISTPRENEUR,
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
