import React from "react";

const MarqueeComponent = () => {
  const images = [
    {
      src: "/images/marquee/midday.jpeg",
      title: "MIDDAY NEWSPAPER ACHIEVER’S AWARD",
      link: "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/432013442_368082722766494_356793418865978774_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=m9eoKOHV_I4Q7kNvgF1jSVz&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAgcCQnrP9BWBJOeoXxlnnYKQ3Zif4FS4eYw1EUZWtC_g&oe=669AFD8B",
    },
    {
      src: "/images/marquee/wow.jpeg",
      title: "WOW AWARDS RECOGNITION",
      link: "https://www.instagram.com/p/Cu1soBntxOL/",
    },
    {
      src: "/images/marquee/toiHeadliner.jpeg",
      title: "TIMES OF INDIA HEADLINER",
      link: "https://timesofindia.indiatimes.com/entertainment/hindi/music/music-reviews/shefali-saxena-shoots-in-jaipurs-heritage-property-for-a-song/articleshow/89181882.cms",
    },
  ];

  return (
    <>
      <div className="marquee">
        <div className="marquee__group">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              className="marquee__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </a>
          ))}
        </div>

        <div aria-hidden="true" className="marquee__group">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              className="marquee__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeComponent;
