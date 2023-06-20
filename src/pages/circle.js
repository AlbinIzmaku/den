import React from "react";
import { Box } from "@mui/material";

function Circle() {
  const numLines = 12;
  const angleDiff = 30;
  const circleRadii = [5, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155];

  const renderLines = () => {
    const lines = [];

    for (let i = 0; i < numLines; i++) {
      const angle = (i * angleDiff * Math.PI) / 180;

      circleRadii.forEach((radius) => {
        const startX = 200 + Math.cos(angle) * radius;
        const startY = 200 + Math.sin(angle) * radius;
        const endX = 200 + Math.cos(angle) * -radius;
        const endY = 200 + Math.sin(angle) * -radius;

        lines.push(
          <line
            key={`${radius}-${i}`}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="black"
            strokeWidth="0.5"
          />
        );
      });
    }

    return lines;
  };

  return (
    <Box sx={{ width: "400px", height: "400px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {circleRadii.map((radius, index) => (
          <circle
            key={index}
            cx="200"
            cy="200"
            r={radius}
            fill="none"
            stroke="black"
            strokeWidth=".5"
          />
        ))}
        {renderLines()}
      </svg>
    </Box>
  );
}

export default Circle;
