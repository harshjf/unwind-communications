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
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);

  console.log(pathname);

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
          {RecognitionData.filter((card) => card.show).map((card, index) => (
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="18"
            height="18"
            x="0"
            y="0"
            viewBox="0 0 32 32"
          >
            <g>
              <path
                d="M26.68 3.867H8.175a1 1 0 0 0 0 2h16.544L4.2 26.387A1 1 0 1 0 5.613 27.8l20.52-20.52v16.545a1 1 0 0 0 2 0V5.321a1.456 1.456 0 0 0-1.453-1.454z"
                fill="white"
              ></path>
            </g>
          </svg>
        </Link>
      </div>

      
    </div>
  );
};

export default Recognition;
