import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [showYellowContainer, setShowYellowContainer] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Maximize Your Financial Potential",
    "Realize Your Homeownership Dreams",
    "Navigate Towards Financial Freedom"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; 

      if (scrollPosition > scrollThreshold && !showYellowContainer) {
        setShowYellowContainer(true);
      } else if (scrollPosition <= scrollThreshold && showYellowContainer) {
        setShowYellowContainer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showYellowContainer]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 4 seconds for quicker transitions
  
    return () => clearInterval(intervalId);
  }, [texts.length]);
  

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <Heading title="YOUR SUCCESS IS OUR PRIORITY" />
          <div className="flip-text">
            {texts.map((text, index) => (
              <h2
                key={index}
                className={index === currentTextIndex ? "" : "hidden"}
              >
                {text}
              </h2>
            ))}
          </div>
          <div className="buttons">
            <a
              href="https://2584954.my1003app.com/2085367/inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">Apply Now</button>
            </a>
            <button className="btn">Request a Call</button>
          </div>
          <div className={`moving-yellow-container ${showYellowContainer ? 'show' : ''}`}>
            <div className="hero-text">
              <h1>Flexible Home Financing Options For Every Buyer</h1>
              <p>
                At Succedo, we simplify the home buying process with clear terms and flexible,
                affordable mortgage rates. Our mission is not just to help you find a house but to
                make a valuable investment in a place you can call home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
