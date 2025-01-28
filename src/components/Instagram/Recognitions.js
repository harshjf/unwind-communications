"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { RecognitionData } from "@/utils/Home/DataOfRecognition/RecognitionData";

const Recognitions = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        /*  backgroundColor: "#041d33", */
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
    >
      <div className="container-fluid ">
        {/*  <h1 className="radio-interviews-title text-center">
          <b>
            <span style={{ color: "white" }}>OUR</span>{" "}
            <span style={{ color: "#973d5d" }}>RECOGNITION</span>
          </b>
        </h1> */}
        <div className="recognition-grid" style={{ paddingTop: "150px" }}>
          {RecognitionData.map((card, index) => (
            <div key={index} className="recognition-card" data-aos="fade-up">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "10px",
                  paddingTop: "10px",
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
    </div>
  );
};

export default Recognitions;
