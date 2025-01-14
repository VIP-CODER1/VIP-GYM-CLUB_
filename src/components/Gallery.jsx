import React from "react";

const Gallery = () => {
  const gallery = [
    "/g10.gif",
   "/g3.gif",
   "/g13.gif",
   "/g4.gif",
   "/g12.gif",
   "/g11.gif",
   "/g6.gif",
   "/g7.gif",
    "/g9.gif",
   "/g2.gif",
    "/img3.gif",
   
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;