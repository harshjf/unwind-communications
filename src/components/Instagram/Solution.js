"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Solution = () => {
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
    <div
      id="solution"
      className="solution-container"
      style={{ marginTop: "40px" }}
    >
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h2 style={{ color: "#041d33" }}>The Solution</h2>
          <p>
            Unwind Communications transforms underrepresented destinations into
            sought-after experiences by combining creativity, cultural
            authenticity, and strategic marketing, ensuring maximum visibility
            and engagement.
          </p>
        </div>
      </div>

      <div className="solution-cards">
        <div className="hero">
          <Image
            src="/images/solution/1.png"
            className="hero-profile-img"
            alt="Profile 1"
            width={750}
            height={500}
          />
          {!isMobile && (
            <>
              <div className="hero-description-bk"></div>

              <div className="hero-description">
                <p style={{ color: "#973d5d" }}>
                  Authentic Audio & Video Production
                </p>
              </div>
            </>
          )}

          <div className="hero-date">
            {isMobile && (
              <h5
                style={{
                  fontSize: "14px",
                }}
              >
                Authentic Audio & Video Production
              </h5>
            )}
            <p>
              High-quality musical videos and vlogs that capture the
              venue&apos;s culture, ambiance, and story with bespoke music and
              visuals.
            </p>
          </div>
        </div>

        <div className="hero">
          <Image
            src="/images/solution/2.png"
            className="hero-profile-img"
            alt="Profile 2"
            style={{ objectFit: "contain" }}
            width={750}
            height={500}
          />
          {!isMobile && (
            <>
              <div className="hero-description-bk"></div>

              <div className="hero-description">
                <p style={{ color: "#973d5d" }}>
                  Strategic Media PR & Digital Distribution
                </p>
              </div>
            </>
          )}
          <div className="hero-date">
            {isMobile && (
              <h5
                style={{
                  fontSize: "14px",
                }}
              >
                Strategic Media PR & Digital Distribution
              </h5>
            )}

            <p>
              Amplifying reach through media platforms, influencers, and social
              channels, ensuring standout visibility in a crowded market.
            </p>
          </div>
        </div>

        <div className="hero">
          <Image
            src="/images/solution/3.png"
            className="hero-profile-img"
            alt="Profile 3"
            width={750}
            height={500}
          />
          {!isMobile && (
            <>
              <div className="hero-description-bk"></div>

              <div className="hero-description">
                <p style={{ color: "#973d5d" }}>
                  Engaging Storytelling & Digital Marketing
                </p>
              </div>
            </>
          )}
          <div className="hero-date">
            {isMobile && (
              <h5
                style={{
                  fontSize: "14px",
                }}
              >
                {" "}
                Engaging Storytelling & Digital Marketing
              </h5>
            )}
            <p>
              Creative blogs, social media content, and SEO strategies connect
              venues to global audiences, driving discovery and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
