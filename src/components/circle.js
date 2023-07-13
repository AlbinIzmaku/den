import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import * as d3 from "d3";

function MyCircle() {
  const svgRef = useRef(null);
  const numLines = 12;
  const angleDiff = 30;
  const circleRadii = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105];

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const boxSize = 400;
    const centerX = boxSize / 2; // Center X coordinate
    const centerY = boxSize / 2; // Center Y coordinate

    svg
      .selectAll("circle")
      .data(circleRadii)
      .enter()
      .append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", (d) => d)
      .attr("fill", (d, i) => (i === 0 ? "white" : "none"))
      .attr("stroke", "black")
      .attr("stroke-width", 0.1);

    // Render lines
    const linesGroup = svg
      .append("g")
      .attr("stroke", "black")
      .attr("stroke-width", 0.1);

    const firstRadius = circleRadii[0];
    const lastRadius = circleRadii[circleRadii.length - 1];

    const lines = [];
    for (let i = 0; i < numLines; i++) {
      const angle = (i * angleDiff * Math.PI) / 180;

      const startX = centerX + Math.cos(angle) * firstRadius;
      const startY = centerY + Math.sin(angle) * firstRadius;
      const endX = centerX + Math.cos(angle) * lastRadius;
      const endY = centerY + Math.sin(angle) * lastRadius;

      lines.push({
        startX,
        startY,
        endX,
        endY,
      });
    }

    linesGroup
      .selectAll("line")
      .data(lines)
      .enter()
      .append("line")
      .attr("x1", (d) => d.startX)
      .attr("y1", (d) => d.startY)
      .attr("x2", (d) => d.endX)
      .attr("y2", (d) => d.endY);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        aspectRatio: "1/1",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Add this line
        backgroundColor: "white"
      }}
    >
      <Box
        sx={{
          position: "absolute", // Add this line
          top: "-30%", // Add this line
          bottom: 0, // Add this line
          left: "-7%", // Add this line
          right: 0, // Add this line
        }}
      >
        <svg ref={svgRef} width="100%" height="100%" />
      </Box>
    </Box>
  );
}

export default MyCircle;
