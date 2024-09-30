import Image from "next/image";
import { useEffect } from "react";
import { TweenMax, Back } from "gsap"; // Assurez-vous que GSAP est installé

const VenetianBlinds = () => {
  useEffect(() => {
    const options = {
      imgSrc1: "/images/imagemomo.png",
      imgSrc2: "/images/imagemomo.png",
      containerName: "placeholder",
      columns: 16,
      margin: 3,
    };

    function VenetianBlinds(defaults) {
      const cols = defaults.columns;
      const margin = defaults.margin;
      const img1 = defaults.imgSrc1;
      const img2 = defaults.imgSrc2;
      const placeholder = document.getElementsByClassName(defaults.containerName)[0];
      let directionX, directionY;

      let column, blind, blindImg;
      let bgImg, colL;
      const colW = (placeholder.offsetWidth / cols) - margin;

      for (let i = 0; i < cols; i++) {
        colL = ((colW + margin) * i);

        column = document.createElement("div");
        column.className = "column";
        column.style.width = colW + "px";
        column.style.left = colL + "px";
        placeholder.appendChild(column);

        for (let j = 0; j < 4; j++) {
          blind = document.createElement("div");
          blind.className = "blind";
          blind.style.width = colW + "px";
          blindImg = document.createElement("div");
          blindImg.className = "blindImg";

          switch (j) {
            case 0:
              TweenMax.set(blind, { rotationY: "0" });
              bgImg = img1;
              break;
            case 1:
              TweenMax.set(blind, { rotationY: "90" });
              bgImg = img2;
              break;
            case 2:
              TweenMax.set(blind, { rotationY: "180" });
              bgImg = img1;
              break;
            case 3:
              TweenMax.set(blind, { rotationY: "270" });
              bgImg = img2;
              break;
          }
          blindImg.style.width = placeholder.offsetWidth + "px";
          blindImg.style.backgroundImage = `url(${bgImg})`;
          blindImg.style.left = -colL + "px";

          column.appendChild(blind);
          blind.appendChild(blindImg);

          TweenMax.set(blind, { transformOrigin: "50% 50% " + -colW / 2, transformStyle: "preserve-3d" });
        }

        TweenMax.set(column, { transformStyle: "preserve-3d", transformPerspective: 1000, rotationY: 0 });

        column.addEventListener("mouseenter", function (event) {
          const elem = event.currentTarget;
          const rotY = elem._gsTransform.rotationY;

          if (directionX > 0) {
            TweenMax.to(elem, 1, { rotationY: Math.floor(rotY / 90) * 90 + 90, transformOrigin: "50% 50% -" + colW / 2, ease: Back.easeOut });
          } else {
            TweenMax.to(elem, 1, { rotationY: Math.floor(rotY / 90) * 90 - 90, transformOrigin: "50% 50% -" + colW / 2, ease: Back.easeOut });
          }
        });
      }

      document.addEventListener("mousemove", function (event) {
        directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
      });
    }

    VenetianBlinds(options);
  }, []);

  const styles = {
    body: {
      margin: 0,
      textAlign: "center",
      backgroundColor: "#1A1919",
    },
    placeholder: {
      display: "inline-block",
      width: "800px",
      height: "600px",
      boxSizing: "border-box",
      marginTop: "40px",
      position: "relative",
    },
    column: {
      position: "absolute",
      top: 0,
      height: "100%",
      boxSizing: "border-box",
    },
    blind: {
      overflow: "hidden",
      position: "absolute",
      width: "100%",
    },
    blindImg: {
      width: "100%",
      backgroundSize: "cover",
    },
  };

  return (
    <div className="placeholder" style={styles.placeholder}>
      {/* Le contenu sera généré dynamiquement par JavaScript */}
    </div>
  );
};

export default VenetianBlinds;
