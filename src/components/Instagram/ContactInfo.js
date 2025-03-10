"use client";

import React, { useState } from "react";

const ContactCard = ({ icon, title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        border: isHovered ? "2px solid #973D5D" : "2px solid transparent",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "border 0.3s ease-in-out, transform 0.3s ease-in-out",
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          margin: "16px 0",
          padding: "12px",
          backgroundColor: "#f3f4f6",
          borderRadius: "50%",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        {icon}
      </div>
      <p style={{ fontWeight: "600", fontSize: "16px", color: "#374151" }}>
        {title}
      </p>
      <p style={{ fontSize: "14px", color: "#6B7280" }}>{content}</p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto", // This ensures it's centered
          padding: "0 20px", // Adds padding to prevent edge touching
        }}
      >
        <ContactCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
          }
          title="Mail Here"
          content="info@unwindcommunications.com"
        />
        <ContactCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              stroke="currentColor"
              fill="currentColor"
            >
              <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
            </svg>
          }
          title="Visit Here"
          content="404-Abhay steel house, Baroda Street, Masjid East, Bombay - 400009"
        />
        <ContactCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="+91-9867231281"
              width="24px"
              fill="currentColor"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
          }
          title="Call Here"
          content="+91 99200 66848"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
