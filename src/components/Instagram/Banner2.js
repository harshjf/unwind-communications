"use client";
import React from "react";
import Image from "next/image";

const Banner2 = () => {
  return (
    <>
      <div className="banner-container">
        <div className="container-image">
          <div className="arrow-icon">
            <Image
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
              src="/images/backgroundbanner.jpg"
              className="curved-image"
              alt="Background"
            />
            <div className="rotating-image-container">
              <Image
                src="/images/heading.png"
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
          <h1 className="banner-one__title-one">Unwind Communication</h1>
          <p className="banner-description">
            We bring India's most captivating destinations and venues to life on
            digital platforms, creating a visual journey that resonates across
            the globe. At UNWIND COMMUNICATIONS, we redefine experiential
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
