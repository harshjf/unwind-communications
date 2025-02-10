"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CelebsConnect = () => {
  const slides = [
    { id: 1, imgSrc: "/images/celebsconnects/1.gif" },
    { id: 2, imgSrc: "/images/celebsconnects/2.gif" },
    { id: 3, imgSrc: "/images/celebsconnects/3.gif" },
    { id: 4, imgSrc: "/images/celebsconnects/4.gif" },
    { id: 5, imgSrc: "/images/celebsconnects/5.gif" },
    { id: 6, imgSrc: "/images/celebsconnects/6.gif" },
    { id: 7, imgSrc: "/images/celebsconnects/7.gif" },
    { id: 8, imgSrc: "/images/celebsconnects/8.gif" },
    { id: 9, imgSrc: "/images/celebsconnects/9.gif" },
    { id: 10, imgSrc: "/images/celebsconnects/10.gif" },
    { id: 11, imgSrc: "/images/celebsconnects/11.gif" },
  ];

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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 4500);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

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
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.imgSrc}
              alt={`Slide ${slide.id}`}
              className="mobile-image"
            />
          ))}
        </div>
      ) : (
        <div className="carousel1-container">
          <div className="carousel1">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              const position = index - currentIndex;
              const scale = isActive ? 1.2 : 0.8 - Math.abs(position) * 0.1;
              const opacity = isActive ? 1 : 1 - Math.abs(position) * 0.3;
              const zIndex = isActive ? 10 : 10 - Math.abs(position);

              return (
                <motion.div
                  key={slide.id}
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
                  <img src={slide.imgSrc} alt={`Slide ${slide.id}`} />
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
