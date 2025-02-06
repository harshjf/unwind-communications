"use client";
import React, { useState, useEffect } from "react";

const CelebsConnect = () => {
  const slides = [
    { id: 1, imgSrc: "/images/celebsconnects/1.png" },
    { id: 2, imgSrc: "/images/celebsconnects/2.png" },
    { id: 3, imgSrc: "/images/celebsconnects/3.png" },
    { id: 4, imgSrc: "/images/celebsconnects/4.png" },
    { id: 5, imgSrc: "/images/celebsconnects/5.png" },
    { id: 6, imgSrc: "/images/celebsconnects/6.png" },
    { id: 7, imgSrc: "/images/celebsconnects/7.png" },
    { id: 8, imgSrc: "/images/celebsconnects/8.png" },
    { id: 9, imgSrc: "/images/celebsconnects/9.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width to determine mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Auto-slide functionality (only for desktop)
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

      {/* Mobile View: Show images stacked */}
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
        // Desktop View: Carousel
        <div className="carousel1-container">
          <div className="carousel1">
            {slides.map((slide, index) => {
              const position = index - currentIndex;
              const scale =
                position === 0 ? 1.2 : 0.8 - Math.abs(position) * 0.1;
              const opacity = position === 0 ? 1 : 1 - Math.abs(position) * 0.3;
              const zIndex = position === 0 ? 10 : 10 - Math.abs(position);

              return (
                <div
                  key={slide.id}
                  className="carousel1-item"
                  style={{
                    transform: `translateX(${position * 50}%) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    transition:
                      "transform 0.5s, opacity 0.5s, width 0.5s, height 0.5s",
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={slide.imgSrc} alt={`Slide ${slide.id}`} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CelebsConnect;
