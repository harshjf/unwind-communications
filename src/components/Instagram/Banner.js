"use client";

import React from "react";
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
  return (
    <>
      <div id="home" className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <h1>
                  {/* Animate "Hi, I'M" first */}
                  <AnimatedText text="Hi, I'M" delay={0} /> <br />
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
              <div className="main-banner-image">
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
                />

                <div className="banner-shape">
                  <Image
                    src="/images/home/shape1.png"
                    alt="image"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="800"
                    data-aos-once="true"
                    width={131}
                    height={282}
                    style={{ height: "250px", width: "350px" }}
                  />

                  <Image
                    src="/images/home/shape1.png"
                    alt="image"
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="800"
                    data-aos-once="true"
                    width={153}
                    height={424}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
