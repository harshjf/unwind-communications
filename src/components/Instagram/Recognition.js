"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { RecognitionData } from "@/utils/Home/DataOfRecognition/RecognitionData";
import { usePathname } from "next/navigation";

const Recognition = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [recognitionData, setRecognitionData] = useState([]);
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);

  console.log(pathname);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const checkShowTwoCardsPerRow = () => {
      if (window.innerWidth <= 1250) {
        setRecognitionData(RecognitionData.filter((card) => card.show));
      } else if (window.innerWidth > 1250) {
        setRecognitionData(
          RecognitionData.filter((card) => card.show).slice(0, 3)
        );
      }
    };

    checkMobile();
    checkShowTwoCardsPerRow();

    window.addEventListener("resize", checkMobile, checkShowTwoCardsPerRow);
    return () =>
      window.removeEventListener(
        "resize",
        checkMobile,
        checkShowTwoCardsPerRow
      );
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#041d33",
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
    >
      <div className="container-fluid ">
        <h1 className="radio-interviews-title text-center">
          <b>
            <span style={{ color: "white" }}>OUR</span>{" "}
            <span style={{ color: "#973d5d" }}>RECOGNITION</span>
          </b>
        </h1>
        <div className="recognition-grid">
          {recognitionData.length > 0 &&
            recognitionData.map((card, index) => (
              <div key={index} className="recognition-card" data-aos="fade-up">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  <div className="recognition-card-image-container">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      layout="fill"
                      objectFit="contain"
                      className="recognition-card-image"
                    />
                  </div>
                  <h3 className="recognition-card-title">{card.title}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
          paddingTop: "40px",
          paddingRight: "40px",
        }}
      >
        <Link className="recognition-btn" href="/recognition">
          <span
            style={{
              color: hovered ? "#973D5D" : "white",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            View more
          </span>
          <img
            src="images/arrow-white.png"
            alt="Arrow"
            width={24}
            height={24}
            style={{
              marginLeft: "8px",
              height: "25px",
              width: "45px",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Recognition;
