import React from "react";

const CampaignInfo = ({ testimonial }) => {
  const { title, marketingContent, youTubeLink } = testimonial;

  return (
    <div
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        /*  alignItems: "center", */

        marginBottom: "40px",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          color: "#973d5d",
          marginBottom: "30px",
          textAlign: "left",
          marginLeft: "30px",
        }}
      >
        What we did?
      </h1>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#666",
          marginLeft: "30px",
          marginRight: "30px",
          textAlign: "left",
        }}
      >
        {marketingContent}
        <br />
        <br />
        <div>
          <a
            href={youTubeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Watch Video
          </a>
        </div>
      </p>
    </div>
  );
};

export default CampaignInfo;
