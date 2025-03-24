"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { KeyServicesData } from "@/utils/Home/DataOfKeyServices/KeyServicesData";

const KeyServices = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <h1
        style={{ paddingTop: "80px", textAlign: "center" }}
        className="radio-interviews-title"
      >
        <b>
          <span style={{ color: "#041d33" }}>OUR</span>{" "}
          <span style={{ color: "#973d5d" }}>OFFERINGS</span>
        </b>
      </h1>

      {!isMobile ? (
        <div
          className="keyServices__container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="keyServices__solid-background">
            <div
              className={`keyServices__grid-overlay ${
                hovered ? "keyServices__grid-overlay--hovered" : ""
              }`}
            >
              {KeyServicesData.map((services, index) => (
                <div
                  key={index}
                  className="keyServices__grid-item"
                  onMouseEnter={() => {
                    setHovered(true);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHovered(false);
                    setActiveIndex(null);
                  }}
                >
                  {/* Image above the title */}

                  <div className="keyServices__grid-item-overlay-inner"></div>
                  <div
                    className="keyServices__grid_contain-items"
                    style={{ textAlign: "center" }}
                  >
                    <img
                      src={services.imagesrc}
                      alt={services.title}
                      className="service-image"
                    />
                    <p className="keyServices__grid-title">{services.title}</p>
                    <p
                      className="keyServices__grid-description"
                      style={{ lineHeight: "1.3" }}
                    >
                      {services.description}
                    </p>
                  </div>
                  <div className="keyServices__grid-item-overlay"></div>
                </div>
              ))}
              <div className="keyServices__grid-item-beneath-overlay"></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
              marginBottom: "20px",
            }}
          >
            <Link className="about-company-btn" href="/offerings">
              <span style={{ color: "#973D5D" }}> View more</span>
              <img
                src="images/right-arrow.png"
                alt="Arrow"
                width={24}
                height={24}
                style={{
                  marginLeft: "8px",
                  height: "20px",
                  width: "40px",
                }}
              />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              padding: "20px",
              textAlign: "center",
            }}
          >
            {KeyServicesData.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#973d5d",
                  color: "#fff",
                  padding: "20px",
                  marginBottom: "20px",
                  borderRadius: "8px",
                  maxWidth: "600px",
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                <img
                  src={service.imagesrc}
                  alt={service.title}
                  style={{
                    width: "200px",
                    height: "200px",
                    maxWidth: "400px",
                    borderRadius: "8px",
                  }}
                />
                <h2
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    color: "white",
                    fontFamily: "Garamond",
                    fontWeight: "800",
                  }}
                >
                  {service.title}
                </h2>

                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    color: "white",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
              marginBottom: "20px",
            }}
          >
            <Link className="about-company-btn" href="/offerings">
              <span style={{ color: "#973D5D" }}> View more</span>
              <img
                src="images/right-arrow.png"
                alt="Arrow"
                width={24}
                height={24}
                style={{
                  marginLeft: "8px",
                  height: "20px",
                  width: "40px",
                }}
              />
            </Link>
          </div>
        </>
      )}

      <style jsx>{`
        .keyServices__solid-background {
          width: 100%;
          height: 600px;
          background-color: #973d5d;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* Styling for the round image above the title */
        .service-image {
          width: 160px; /* Adjust the size as needed */
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px; /* Space between image and title */
        }
      `}</style>
    </>
  );
};

export default KeyServices;
