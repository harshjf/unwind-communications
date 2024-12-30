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
      <div className="overlaypart"></div>{" "}
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <h2>
            <b>
              <span style={{ color: "#973d5d" }}>SOLUTION</span> TO THE PROBLEM
            </b>
          </h2>
          <p>
            Unwind Communications transforms underrepresented destinations into
            sought-after experiences by combining unique creativity, cultural
            authenticity, and strategic marketing, ensuring maximum visibility
            and engagement, thus conversions.
          </p>
        </div>
      </div>
      <div className="solution-cards" style={{ marginTop: "30px" }}>
        <div className="hero">
          <Image
            src="/images/solution/1.jpg"
            className="hero-profile-img"
            alt="Profile 1"
            width={750}
            height={500}
          />
          {!isMobile && (
            <>
              <div className="hero-description-bk"></div>

              {/*  <div className="hero-description">
                <p style={{ color: "#973d5d" }}>
                  Authentic Audio & Video Production
                </p>
              </div> */}
            </>
          )}

          <div className="hero-date">
            {/* {isMobile && (
              <h5
                style={{
                  fontSize: "14px",
                  color: "#973d5d",
                  lineHeight: "1.7",
                }}
              >
                Authentic Audio & Video Production
              </h5>
            )} */}
            <h5
              style={{
                fontSize: "17px",
                color: "#973d5d",
                lineHeight: "1.7",
                fontWeight: "800",
              }}
            >
              Authentic Audio & Video Production
            </h5>
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

              {/* <div className="hero-description">
                <p style={{ color: "#973d5d" }}>
                  Strategic Media PR & Digital Distribution
                </p>
              </div> */}
            </>
          )}
          <div className="hero-date">
            {/* {isMobile && (
              <h5
                style={{
                  fontSize: "14px",
                  color: "#973d5d",
                  lineHeight: "1.7",
                }}
              >
                Strategic Media PR & Digital Distribution
              </h5>
            )} */}
            <h5
              style={{
                fontSize: "17px",
                color: "#973d5d",
                lineHeight: "1.7",
                fontWeight: "800",
              }}
            >
              Strategic Media PR & Digital Distribution
            </h5>
            <p>
              Amplifying reach through media & electronic publications &
              distributing on streaming platforms for the organic reach &
              visibility.
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

              {/*   <div className="hero-description">
                <p style={{ color: "#973d5d" }}>
                  Engaging Storytelling & Digital Marketing
                </p>
              </div> */}
            </>
          )}
          <div className="hero-date">
            {/*  {isMobile && (
              <h5
                style={{
                  fontSize: "14px",
                  color: "#973d5d",
                  lineHeight: "1.7",
                }}
              >
                {" "}
                Engaging Storytelling & Digital Marketing
              </h5>
            )} */}
            <h5
              style={{
                fontSize: "17px",
                color: "#973d5d",
                lineHeight: "1.7",
                fontWeight: "800",
              }}
            >
              Engaging Storytelling & Digital Marketing
            </h5>
            <p>
              Creative blogs, social media content, influencer programs & SEO
              strategies connect venues to global audiences, driving discoved
              engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
