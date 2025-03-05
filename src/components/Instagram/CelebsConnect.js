"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CelebsConnect = () => {
  const totalSlides = 83;

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 4500);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const getImageSrc = (index, isActive) => {
    const gifPath = `/images/celebphotos/${index + 1}.gif`;
    const jpgPath = `/images/celebphotos/${index + 1}.jpg`;
    const jpegPath = `/images/celebphotos/${index + 1}.jpeg`;

    if (isActive) {
      const gifExists = new Image();
      gifExists.src = gifPath;
      return gifExists.complete ? gifPath : jpgPath;
    }

    return jpgPath;
  };

  return (
    <>
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="true"
          style={{ paddingBottom: "30px" }}
        >
          <h1>
            <b>
              CELEBS <span style={{ color: "#973d5d" }}>CONNECT</span>
            </b>
          </h1>
        </div>
      </div>

      {isMobile ? (
        <div className="mobile-gallery">
          {[...Array(totalSlides)].map((_, index) => (
            <img
              key={index + 1}
              src={`/images/celebphotos/${index + 1}.gif`}
              alt={`Slide ${index + 1}`}
              className="mobile-image"
            />
          ))}
        </div>
      ) : (
        <div className="carousel1-container">
          <div className="carousel1">
            {[...Array(totalSlides)].map((_, index) => {
              const isActive = index === currentIndex;
              const position = index - currentIndex;
              const scale = isActive ? 1.2 : 0.8 - Math.abs(position) * 0.1;
              const opacity = isActive ? 1 : 1 - Math.abs(position) * 0.3;
              const zIndex = isActive ? 10 : 10 - Math.abs(position);
              const imgSrc = getImageSrc(index, isActive);
              return (
                <motion.div
                  key={index + 1}
                  className={`carousel1-item ${isActive ? "highlighted" : ""}`}
                  style={{
                    transform: `translateX(${position * 50}%) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    transition:
                      "transform 0.5s, opacity 0.5s, width 0.5s, height 0.5s",
                  }}
                  onClick={() => setCurrentIndex(index)}
                  initial={{ filter: "blur(5px)" }}
                  animate={{
                    filter: isActive
                      ? "blur(0px) brightness(1.2)"
                      : "blur(5px)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={imgSrc} alt={`Slide ${index + 1}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        .carousel1-item.highlighted {
          filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.6));
          transition: filter 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default CelebsConnect;
