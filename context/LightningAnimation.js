import React from "react";
import { useSpring, animated } from "@react-spring/web";

const LightningAnimation = ({ showLightning }) => {
  const lightningProps = useSpring({
    opacity: showLightning ? 1 : 0,
    config: { duration: 500 },
  });

  const generateBolts = () => {
    const bolts = [];
    for (let i = 0; i < 10; i++) {
      const top = `${Math.random() * 80 + 10}%`; // Position aléatoire sur l'axe Y
      const left = `${Math.random() * 80 + 10}%`; // Position aléatoire sur l'axe X
      const height = `${Math.random() * 100 + 100}px`; // Hauteur aléatoire des éclairs
      bolts.push(
        <div
          className="bolt"
          key={i}
          style={{
            top,
            left,
            height,
            boxShadow: "0 0 10px rgba(255, 0, 0, 1), 0 0 20px rgba(255, 0, 0, 0.5)", // Éclair lumineux
          }}
        />
      );
    }
    return bolts;
  };

  return (
    <div className="lightningContainer">
      {showLightning && (
        <animated.div className="lightning" style={lightningProps}>
          {generateBolts()}
        </animated.div>
      )}
    </div>
  );
};

export default LightningAnimation;
