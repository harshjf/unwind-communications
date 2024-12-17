import React from "react";

const PlaceInfo = ({ testimonial }) => {
  if (!testimonial) {
    return <div>Testimonial data is not available</div>;
  }

  const { title, placeImage, placeDescription } = testimonial;

  return (
    <div className="place-info-container">
      <div className="place-info-header">
        <div className="place-info-header-content">
          <h5 className="place-info-subtitle"> About the place</h5>
          <h1 className="place-info-title">{title}</h1>
        </div>
      </div>

      <div className="place-info-content">
        <div className="place-info-image-container">
          <img src={placeImage} alt={title} className="place-info-image" />
        </div>

        <div className="place-info-description">{placeDescription}</div>
      </div>
    </div>
  );
};

export default PlaceInfo;
