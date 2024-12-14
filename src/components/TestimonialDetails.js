"use client";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const TestimonialDetails = () => {
  const [showCard, setShowCard] = useState(true);

  return (
    <>
      <div className="testimonial-container">
        <div className="youtube-container">
          <YouTube
            videoId="mwEZkRvjRC8"
            className="youtube-video"
            opts={{
              playerVars: {
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                loop: 1,
                playlist: "mwEZkRvjRC8",
                mute: 1,
                rel: 0,
                disablekb: 1,
              },
            }}
          />
        </div>

        <div className="overlay"></div>

        <div className="circle-container">
          <motion.div
            className="circle circle-1"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <h2 className="card-title">Transforming Destinations</h2>
            <p className="card-text">
              This video played a crucial role in showcasing the beauty and
              culture of the destination, leading to increased tourism and
              global recognition. It created a lasting impact, inspiring many to
              visit and experience the magic firsthand.
            </p>
          </motion.div>

          <div className="circle-wrapper">
            <motion.div
              className="circle-2"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, type: "spring" }}
            >
              <div className="rotating-border-container">
                <div className="rotating-border"></div> {/* Rotating border */}
                <div className="circle-image-container">
                  <img
                    src="/images/testimonials/5.webp"
                    alt="Person 2"
                    className="circle-image"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialDetails;
