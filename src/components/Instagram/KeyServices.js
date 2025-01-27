"use client";

import React, { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SliderImage1 from "/public/images/instagram/Slider_homepage_extra1.png";
import SliderImage2 from "/public/images/instagram/Slider_homepage_extra2.png";
import Image from "next/image";
import { KeyServicesData } from "@/utils/Home/DataOfKeyServices/KeyServicesData";

const KeyServices = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false); // Track hover state globally
  const [activeIndex, setActiveIndex] = useState(null);
  const imageUrls = [
    "/images/instagram/Slider_homepage_extra1.png",
    "/images/instagram/Slider_homepage_extra2.png",
    "/images/instagram/Slider_homepage_extra1.png",
    "/images/instagram/Slider_homepage_extra2.png",
    "/images/instagram/Slider_homepage_extra1.png",
    "/images/instagram/Slider_homepage_extra2.png",
  ];
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageChange = useCallback(
    (index) => {
      setHovered(true);
      setActiveIndex(index);
      setCurrentImage(imageUrls[index]);
    },
    [imageUrls]
  );

  return (
    <>
      <h1
        style={{ paddingTop: "80px" }}
        className="radio-interviews-title text-center"
      >
        <b>
          <span style={{ color: "#041d33" }}>OUR</span>{" "}
          <span style={{ color: "#973d5d" }}>SERVICES</span>
        </b>
      </h1>
      <div className="keyServices__container">
        <div className="keyServices__image-wrapper">
          <Image
            src={currentImage}
            width={1400}
            height={600}
            alt="Key Services"
            className="keyServices__image"
          />
          <div
            className={`keyServices__grid-overlay ${
              hovered ? "keyServices__grid-overlay--hovered" : ""
            }`}
          >
            {KeyServicesData.map((services, index) => (
              <div
                key={index}
                className="keyServices__grid-item"
                onMouseEnter={() => handleImageChange(index)} // Use the callback
                onMouseLeave={() => {
                  setHovered(false); // Reset global hover state
                  setActiveIndex(null);
                }}
              >
                <div className="keyServices__grid-item-overlay-inner"></div>
                <div className="keyServices__grid_contain-items">
                  <p className="keyServices__grid-title">{services.title}</p>
                  <p className="keyServices__grid-description">
                    {services.description}
                  </p>
                </div>
                <div className="keyServices__grid-item-overlay"></div>
              </div>
            ))}
            <div className="keyServices__grid-item-beneath-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyServices;
