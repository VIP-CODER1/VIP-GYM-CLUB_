import React, { useState, useEffect } from "react";

const Navbar = () => {
  const topHeaderStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius:"30px",
    
  };

  const middleHeaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh", // Occupies the middle section of the page
    color: "rgb(4, 249, 245)",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    backgroundSize: "cover", // Cover the entire section
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backdropFilter: "brightness(0.1)", // Add a dark overlay effect
    
};

  const marqueeStyle = {
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
    bottom: "10px", // Position the marquee at the bottom of the middle header
  };

  const marqueeTextStyle = {
    display: "inline-flex", // Use inline-flex to align the icon, text, and GIFs
    alignItems: "center",
    animation: "marquee-animation 10s linear infinite",
    fontSize: "18px",
    color: "rgb(8, 235, 251)", // Bright color for visibility
    gap: "8px", // Add spacing between elements
    textTransform: "uppercase",
    textShadow: "20px 20px 20px rgba(245, 22, 22, 0.5)",
    textShadow: "1px 1px red",
    

  };

  const gifStyle = {
    width: "40px", // Set GIF dimensions (ensure width and height are the same for circular shape)
    height: "40px",
    borderRadius: "50%", // Make it circular
  };

  // List of news statements
  const newsStatements = [
    "Exclusive Offer: Get 50% Off on All Membership Plans This Weekend Only!",
    "Join Now and Get a Free Personal Training Session with Every Sign-Up!",
    "Our Gym Is Now Open 24/7! Work Out Anytime, Day or Night!",
    "Big Discount for Couples: Sign Up Together and Save Up to 30%!",
    "New Fitness Classes Added: Try Our Yoga, Zumba, and Strength Training Today!"
  ];

  // State to track the current news statement
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // Cycle through the news statements every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsStatements.length);
    }, 5000); // Change news every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      {/* Top Header */}
      <header style={topHeaderStyle}>VIP GYM CLUB</header>

      {/* Middle Header */}
      <div style={middleHeaderStyle}>
        <p></p>
        {/* News Marquee */}
        <div style={marqueeStyle}>
          <p style={marqueeTextStyle}>
            <img
              src="/news.webp"
              alt="Start GIF"
              style={gifStyle}
            /> {/* Start GIF */}
            {newsStatements[currentNewsIndex]}
            <img
              src="/news.webp"
              alt="End GIF"
              style={gifStyle}
            /> {/* End GIF */}

            
          </p>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee-animation {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
