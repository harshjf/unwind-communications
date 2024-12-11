"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../../styles/bannerstyle.css";

const splitText = (text) => text.split("");

const AnimatedText = ({ text, delay = 0, className = "" }) => {
  const letters = splitText(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
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
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div id="home" className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <h1 style={{ color: "#041d33" }}>
                  <AnimatedText text="Hi, I'm" delay={0} />{" "}
                </h1>
                <h1 style={{ color: "#973d5d" }}>
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
            <div
              className="col-lg-7 col-md-12"
              style={{
                paddingTop: "350px",
              }}
            >
              <a href="#">
                <div class="card">
                  <div class="wrapper">
                    <img src="/images/home/shefali1.jpg" class="cover-image" />
                  </div>

                  <img src="/images/home/shefali.png" class="character" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
