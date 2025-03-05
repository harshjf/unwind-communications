"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CelebsConnect = () => {
  const totalSlides = 83;
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [imageSrcMap, setImageSrcMap] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadActiveImage = async () => {
      const gifSrc = `/images/celebphotos/${currentIndex}.gif`;
      const jpgSrc = `/images/celebphotos/${currentIndex}.jpg`;

      const gifExists = await checkImageExists(gifSrc);
      setImageSrcMap((prev) => ({
        ...prev,
        [currentIndex]: gifExists ? gifSrc : jpgSrc,
      }));
    };

    loadActiveImage();
  }, [currentIndex]);

  const checkImageExists = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
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
        // ✅ MOBILE VIEW - Full Width Automatic Carousel
        <div className="mobile-carousel-container">
          <div
            className="mobile-carousel"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`mobile-carousel-item ${isActive ? "active" : ""}`}
                >
                  <img
                    src={
                      isActive
                        ? imageSrcMap[index] ||
                          `/images/celebphotos/${index}.jpg`
                        : `/images/celebphotos/${index}.jpg`
                    }
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              );
            })}
          </div>
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

              return (
                <motion.div
                  key={index}
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
                  <img
                    src={
                      isActive
                        ? imageSrcMap[index] ||
                          `/images/celebphotos/${index}.jpg`
                        : `/images/celebphotos/${index}.jpg`
                    }
                    alt={`Slide ${index + 1}`}
                  />
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

        /* ✅ MOBILE CAROUSEL */
        .mobile-carousel-container {
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .mobile-carousel {
          display: flex;
          width: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .mobile-carousel-item {
          min-width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease-in-out;
        }

        .mobile-carousel-item img {
          width: 90%;
          height: auto;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .mobile-carousel-container {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default CelebsConnect;
