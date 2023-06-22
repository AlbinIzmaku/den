import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import * as d3 from "d3";

function Circle() {
  const svgRef = useRef(null);
  const numLines = 12;
  const angleDiff = 30;
  const circleRadii = [5, 20, 35, 50, 65, 80, 95, 110, 125, 140, 155];

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Render circles
    svg
      .selectAll("circle")
      .data(circleRadii)
      .enter()
      .append("circle")
      .attr("cx", 200)
      .attr("cy", 200)
      .attr("r", (d) => d)
      .attr("fill", (d, i) => (i === 0 ? "white" : "none")) // Set first circle fill to white
      .attr("stroke", "black")
      .attr("stroke-width", 0.1);

    // Render lines
    const lines = [];
    for (let i = 0; i < numLines; i++) {
      const angle = (i * angleDiff * Math.PI) / 180;

      circleRadii.slice(1).forEach((radius) => {
        // Exclude the first circle radius
        const startX = 200 + Math.cos(angle) * radius;
        const startY = 200 + Math.sin(angle) * radius;
        const endX = 200 + Math.cos(angle) * -radius;
        const endY = 200 + Math.sin(angle) * -radius;

        lines.push({
          startX,
          startY,
          endX,
          endY,
        });
      });
    }

    svg
      .selectAll("line")
      .data(lines)
      .enter()
      .append("line")
      .attr("x1", (d) => d.startX)
      .attr("y1", (d) => d.startY)
      .attr("x2", (d) => d.endX)
      .attr("y2", (d) => d.endY)
      .attr("stroke", "black")
      .attr("stroke-width", 0.5);
  }, []);

  return (
    <Box sx={{ width: "400px", height: "400px" }}>
      <svg ref={svgRef} width="100%" height="100%" />
    </Box>
  );
}

export default Circle;
