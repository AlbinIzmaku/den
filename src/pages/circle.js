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
    svg
      .selectAll("circle")
      .data(circleRadii)
      .enter()
      .append("circle")
      .attr("cx", boxSize / 2)
      .attr("cy", boxSize / 2)
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

      const startX = boxSize / 2 + Math.cos(angle) * firstRadius;
      const startY = boxSize / 2 + Math.sin(angle) * firstRadius;
      const endX = boxSize / 2 + Math.cos(angle) * lastRadius;
      const endY = boxSize / 2 + Math.sin(angle) * lastRadius;

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
        width: "90%",
        aspectRatio: "1/1",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg ref={svgRef} width="100%" height="100%" />
    </Box>
  );
}

export default MyCircle;
