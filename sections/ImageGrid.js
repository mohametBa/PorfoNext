"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const ImageGrid = ({ imgSrc, rows = 5, columns = 5, margin = 2.5, animTime = 0.3 }) => {
  useEffect(() => {
    const container = document.querySelector(".gridContainer");
    const placeholder = document.querySelector(".placeholder");
    
    const w = (container.offsetWidth / columns) - margin;
    const h = (container.offsetHeight / rows) - margin;

    let arr = [];
    let gridTiles = [];

    for (let i = 0; i < rows * columns; i++) {
      let gridTile = document.createElement("div");
      gridTile.className = "gridTile";
      gridTile.style.backgroundImage = `url(${imgSrc})`;

      arr = [
        (w + margin) * (i % columns), 
        (h + margin) * Math.floor(i / columns), 
        (w + margin) * (i % columns) + w - margin, 
        (h + margin) * Math.floor(i / columns), 
        (w + margin) * (i % columns) + w - margin, 
        (h + margin) * Math.floor(i / columns) + h - margin, 
        (w + margin) * (i % columns), 
        (h + margin) * Math.floor(i / columns) + h - margin,
      ];

      gsap.set(gridTile, {
        clipPath: `polygon(${arr[0]}px ${arr[1]}px, ${arr[2]}px ${arr[3]}px, ${arr[4]}px ${arr[5]}px, ${arr[6]}px ${arr[7]}px)`,
      });

      container.appendChild(gridTile);
      gridTiles.push(gridTile);
    }

    // Animation on hover
    placeholder.addEventListener("mouseover", () => {
      gridTiles.forEach((tile) => {
        gsap.to(tile, animTime, { backgroundPosition: "0px 0px", ease: "power1.out" });
      });
    });

    placeholder.addEventListener("mouseleave", () => {
      gridTiles.forEach((tile, index) => {
        fixTilePosition(tile, index);
      });
    });

    function fixTilePosition(tile, index) {
      const centrCol = Math.ceil(columns / 2);
      const centrRow = Math.ceil(rows / 2);
      const offsetW = w / centrCol;
      const offsetH = h / centrRow;

      const left = Math.round((index % columns - centrCol + 1) * offsetW);
      const top = Math.round((Math.floor(index / columns) - centrRow + 1) * offsetH);

      gsap.to(tile, animTime, { backgroundPosition: `${left}px ${top}px`, ease: "power1.out" });
    }
  }, [imgSrc, rows, columns, margin, animTime]);

  return (
    <div className="placeholder">
      <div className="gridContainer" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default ImageGrid;
