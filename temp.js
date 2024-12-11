"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const splitText = (text) => text.split("");

const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const letters = splitText(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.05, // Delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -50 }, // Letters start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }, // Smooth transition
    },
  };

  return (
    <motion.div
      className={`animated-text ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const bannerImageStyle = {
    position: "relative",
    textAlign: "center",
    width: "100%",
    paddingTop: "60px",
    zIndex: 1,
    backgroundImage: "url(/images/home/bg1.png)",
    backgroundPosition: "top center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const cardStyle = {
    position: "relative",
    width: "var(--card-width, 495px)",
    height: "var(--card-height, 585px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    perspective: "2500px",
    margin: "0 auto",
    borderRadius: "5px",
  };

  const characterImageStyle = {
    width: "100%",
    opacity: 0,
    transition: "all 0.5s",
    position: "absolute",
    zIndex: -1,
  };

  const characterImageHoverStyle = {
    opacity: 1,
    transform: "translate3d(0%, -30%, 100px)",
  };
  return (
    <>
      <div id="home" className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <h1>
                  {/* Animate "Hi, I'M" first */}
                  <AnimatedText text="Hi, I'm" delay={0} /> <br />
                  {/* Animate "Shefali Saxena" with a delay */}
                  <AnimatedText text="Shefali Saxena" delay={0.5} />
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Award-winning Artistpreneur and founder of Unwind
                  Communications, redefining destination and venue promotion
                  through musical storytelling and professionally crafted
                  audio-visual content.
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="main-banner-image"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  position: "relative",
                  textAlign: "center",
                  width: "100%",
                  paddingTop: "60px",
                  zIndex: 1,
                  backgroundImage: "url(/images/home/bg1.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  perspective: "1000px", // Added perspective to create a 3D effect
                }}
              >
                <Image
                  src="/images/home/shefali.png"
                  className="main-image"
                  alt="image"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                  width={495}
                  height={585}
                  style={{
                    opacity: isHovered ? 1 : 0.9,
                    transform: isHovered
                      ? "rotateY(20deg) translateZ(50px) translateY(-30px)" // Enhanced transform for 3D effect
                      : "rotateY(0deg) translateZ(0) translateY(0)",
                    transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth animation
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

<div className="col-lg-7 col-md-12">
  <a href="#">
    <div
      style={{
        width: "calc(300px / 1.5)",
        height: "300px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: "0 36px",
        perspective: "2500px",
        margin: "0 50px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          transition: "all 0.5s",
          position: "absolute",
          width: "100%",
          zIndex: "-1",
          borderRadius: "5px",
        }}
      >
        <img
          src="/images/home/shefali1.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </div>

      <img src="/images/home/shefali.png" class="character" />
    </div>
  </a>
</div>;
