import React from "react";
import BlurText from "../utils/BlurText";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <div className="home_Container" id="home">
        <div className="left_Section">
          <h3 className="stroke_Text">Hi,</h3>
          <h3 className="stroke_Text">Myself</h3>
          <BlurText
            text="Prakhar Saxena"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />

          <p>
            Frontend Developer <i class="fa-solid fa-location-dot"></i>Madhya
            Pradesh , (IN)
          </p>
        </div>
        <div className="SCROLL">
            <h4>Down</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
