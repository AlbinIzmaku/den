import React, { useState } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const ProgressBar = ({ color }) => {
  const [rating, setRating] = useState(0);

  const handleDecrease = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }
  };

  const handleIncrease = () => {
    if (rating < 5) {
      setRating(rating + 1);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid black"
      position="relative"
      width="100px"
      height="20px"
    >
      <LinearProgress
        variant="determinate"
        value={(rating / 5) * 100}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          "& .MuiLinearProgress-bar": {
            backgroundColor: color, // Set the color of the progress bar
          },
        }}
      />
      <ArrowLeftIcon
        className="arrow"
        onClick={handleDecrease}
        sx={{ position: "absolute", left: "-8px" }}
      />
      <ArrowRightIcon
        className="arrow"
        onClick={handleIncrease}
        sx={{ position: "absolute", right: "-8px" }}
      />

      <Typography sx={{ position: "absolute", left: "10px", color: "white" }}>
        {rating} of 5
      </Typography>
    </Box>
  );
};

export default ProgressBar;
