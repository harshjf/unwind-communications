"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const OurPartner = () => {
  const [isMounted, setIsMounted] = useState(false); // State to track if the component is mounted
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    // Set state to true once component is mounted on the client
    setIsMounted(true);
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const interviews = [
    {
      id: 1,
      station: "Chomu Palace",
      image: "/images/testimonials/1.png",
      date: "15th Feb, 3-5 PM",
      title: "Ghoomar",
      youtubeLink: "https://www.youtube.com/watch?v=mwEZkRvjRC8",
    },
    {
      id: 2,
      station: "Holiday Inn",
      image: "/images/solution/1.jpg",
      date: "26th Jan, 8 PM",
      title: "Tu Hee Tu",
      youtubeLink: "https://www.youtube.com/watch?v=AqCw1fJNO8A",
    },
    {
      id: 3,
      station: "Ayodhya",
      image: "/images/work/work5.png",
      date: "4th June, 6:00 PM",
      title: "Artist of the Week",
      youtubeLink: "https://www.youtube.com/watch?v=tTqOOl52Y5M",
    },
    {
      id: 4, // Fixed duplicate id issue
      station: "Sterling Resorts",
      image: "/images/work/work6.png",
      date: "4th June, 6:00 PM",
      title: "Artist of the Week",
      youtubeLink: "https://www.youtube.com/watch?v=lCXW0Dd2Ry0",
    },
  ];

  return (
    <section id="interviews" className="radio-interviews-container">
      <h1 style={{ paddingBottom: "80px" }} className="radio-interviews-title">
        <b>
          <span style={{ color: "#041d33" }}>OUR</span>{" "}
          <span style={{ color: "#973d5d" }}>PARTNERS</span>
        </b>
      </h1>

      {/* Only render router.pathname after the component is mounted */}

      <div
        className={`${
          pathname === "/recognition/"
            ? "interviews-grid-recognition"
            : "interviews-grid-partner"
        }`}
      >
        {interviews.map((item) => (
          <div
            key={item.id}
            className="interview-card-partner"
            data-aos="flip-left" // AOS flip animation
          >
            <a
              href={item.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="interview-image"
              />
            </a>
            <h4 className="interview-station">{item.station}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartner;
