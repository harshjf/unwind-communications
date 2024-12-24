"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Section3 = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="section3-container">
      <h1
        data-aos="fade-up"
        data-aos-duration="800"
        style={{
          color: "#973d5d",
          marginBottom: "40px",
        }}
      >
        <b>ACCOLADES</b>
      </h1>

      {/* Part 1 */}
      <div className="section3-part">
        {!isMobile && (
          <div
            className="section3-image"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Image
              src="/images/video/vision2.png"
              alt="Accolade Image"
              width={300}
              height={200}
            />
          </div>
        )}
        <div
          className="section3-content"
          style={{ marginRight: "auto" }}
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h3 className="section3-subtitle">
            <b>
              <span style={{ color: "#041d33" }}>EMPOWERING</span>{" "}
              <span style={{ color: "#973d5d" }}>PM MODI&apos;S VISION</span>{" "}
              <span style={{ color: "#041d33" }}>FOR</span>{" "}
              <span style={{ color: "#973d5d" }}>भारत</span>{" "}
              <span style={{ color: "#041d33" }}>AS A </span>
              <span style={{ color: "#973d5d" }}>
                LEADING GLOBAL DESTINATION
              </span>
            </b>
          </h3>
          <p>
            Our Respected{" "}
            <span style={{ color: "#b80a06" }}>
              Prime Minister, Shri Narendra Modi Ji
            </span>
            , envisions <b>Bharat</b> as a <b>Leading Global Destination</b> for
            Wedding and MICE Tourism, showcasing India’s Vibrancy, Grandeur, and
            Cultural Magnificence as the ultimate destination to explore.
            <br />
            <br />
            Shefali is deeply committed to bringing this vision to life,
            transforming <b>PM Modi Ji’s dream into a remarkable reality!</b>
          </p>
        </div>
        {isMobile && (
          <div
            className="section3-image"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Image
              src="/images/video/vision2.png"
              alt="Accolade Image"
              width={300}
              height={200}
            />
          </div>
        )}
      </div>

      {/* Part 2 */}
      <div className="section3-part">
        <div
          className="section3-content"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h3 className="section3-subtitle">
            <b>
              <span style={{ color: "#041d33" }}>SHEFALI&apos;S</span>{" "}
              <span style={{ color: "#973d5d" }}>RECOGNITION</span>{" "}
              <span style={{ color: "#041d33" }}>AND</span>{" "}
              <span style={{ color: "#973d5d" }}>ACHIEVEMENTS</span>
            </b>
          </h3>
          <p>
            Shefali Saxena is awarded as a <b>POWER WOMAN</b> by renowned
            lyricist & screenwriter, <b>Javed Akhtar Sahab</b> with a dedicated
            poetry in his handwriting for her Incredible works in{" "}
            <b>Ghoomar - A Royal Folk</b> as a Featured Artist, Singer, Director
            & Producer, supporting folk musicians!
            <br />
            <br />
            <b>This award is powered by IPRS, Dolby & Hungama.</b>
          </p>
        </div>
        <div
          className="section3-image"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <Image
            src="/images/video/vision3.png"
            alt="Innovation Image"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
