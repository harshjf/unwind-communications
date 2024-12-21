"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const RadioInterviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const interviews = [
    {
      id: 1,
      station: "92.7 BIG FM",
      image: "/images/work/radio3.png",
      date: "4th June, 6:00 PM",
      title: "Artist of the Week",
      youtubeLink: "https://www.youtube.com/watch?v=kJY7qWv0D7w",
    },
    {
      id: 2,
      station: "93.5 RED FM",
      image: "/images/work/radio1.png",
      date: "15th Feb, 3-5 PM",
      title: "Ghoomar",
      youtubeLink: "https://www.youtube.com/watch?v=FDBcfPuvqNk",
    },
    {
      id: 3,
      station: "MIRCHIINDIES",
      image: "/images/work/radio2.png",
      date: "26th Jan, 8 PM",
      title: "Ghar Se Indies",
      youtubeLink: "https://www.youtube.com/watch?v=8dMRIdoVA7w",
    },
  ];

  return (
    <section id="interviews" className="radio-interviews-container">
      <h1 className="radio-interviews-title">
        <span style={{ color: "#B22222" }}>Radio</span> Interviews
      </h1>

      <div className="interviews-grid">
        {interviews.map((item) => (
          <div
            key={item.id}
            className="interview-card"
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

export default RadioInterviews;
