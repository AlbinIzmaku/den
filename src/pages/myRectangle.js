import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const RectangleRating = ({color}) => {
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
    <Box display="flex" alignItems="center" border="1px solid black" position="relative" width="100px" height="20px">
      <ArrowLeftIcon className="arrow" onClick={handleDecrease} sx={{ position: 'absolute', left: "-8px"}} />
      <svg width={100} height={20}>
        <rect
          x={0}
          y={0}
          width="100%"
          height={20}
          fill={color}
          style={{ clipPath: `inset(0% ${100 - (rating / 5) * 100}% 0% 0%)` }}
        />
      </svg>
      <ArrowRightIcon className="arrow" onClick={handleIncrease} sx={{ position: 'absolute', right: "-8px" }} />
      <Typography sx={{ position: 'absolute', left: "10px", color: "white"}}>4 of 5</Typography>
    </Box>
  );
};

export default RectangleRating;
