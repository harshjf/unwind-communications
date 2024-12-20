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
      <h2 className="section3-title" data-aos="fade-up" data-aos-duration="800">
        Accolades
      </h2>

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
            Empowering PM Modi&apos;s Vision For भारत As a Leading Global
            Destination
          </h3>
          <p>
            Our Respected Prime Minister, Shri Narendra Modi Ji, envisions
            Bharat as a Leading Global Destination for Wedding and MICE Tourism,
            showcasing India’s Vibrancy, Grandeur, and Cultural Magnificence as
            the ultimate destination to explore. Shefali is deeply committed to
            bringing this vision to life, transforming PM Modi Ji’s dream into a
            remarkable reality!
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
          <h3 className="section3-subtitle">Award for Excellence</h3>
          <p>
            Shefali is awarded as a POWER WOMAN by renowned lyricist and
            screenwriter, Javed Akhtar Sahab with a dedicated poetry in his
            handwriting for her Incredible work in Ghoomar - A Royal Folk as a
            Singer, Performer, Director and Producer! This award is powered by
            IPRS, Dolby and Hungama.
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
