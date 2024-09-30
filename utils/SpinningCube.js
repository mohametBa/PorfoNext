import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { useRef, useEffect } from "react";

const SpinningText = ({ theme }) => {
  const textRef = useRef();

  const textColor = theme === "dark" ? "#ffffff" : "#000000"; // Blanc pour dark, Noir pour light

  useEffect(() => {
    if (textRef.current) {
      textRef.current.material.color.set(textColor);
    }
  }, [theme, textColor]);

  return (
    <mesh ref={textRef} rotation={[0.4, 0.2, 0]}>
      <Text3D 
        bevelEnabled
        bevelOffset={0}
        bevelSegments={5}
        bevelSize={0.02}
        bevelThickness={0.1}
        curveSegments={12}
        font="/fonts/helvetiker_regular.typeface.json"
        height={0.5}
        size={1}
      >
        Mohamet BA
        <meshStandardMaterial color={textColor} /> 
      </Text3D>
    </mesh>
  );
};

const ThreeDAnimation = ({ theme }) => {
  const canvasStyle = {
    borderRadius: "50%", 
    border: "3px solid #fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    width: "350px", 
    height: "350px",
    objectFit: "cover",
    margin: "auto",
  };

  return (
    <Canvas style={canvasStyle}>
      {/* Ajouter plus de lumière pour rendre le texte visible */}
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} position={[2, 2, 5]} />
      <pointLight intensity={1} position={[10, 10, 10]} />
      
      <SpinningText theme={theme} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDAnimation;
