import React, { useState } from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RectangleRating = () => {
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

  const getFillPercentage = () => {
    return `${(rating / 5) * 100}%`;
  };

  return (
    <Box display="flex" alignItems="center" border="1px solid #800080">
      <ArrowBackIcon className="arrow" onClick={handleDecrease} />
      <svg width={800} height={200}>
        <rect
          x={0}
          y={0}
          width={getFillPercentage()}
          height={200}
          fill="#800080"
        />
      </svg>
      <ArrowForwardIcon className="arrow" onClick={handleIncrease} />
    </Box>
  );
};

export default RectangleRating;
