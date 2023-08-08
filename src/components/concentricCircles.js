import React from 'react';
import { SvgIcon, Circle, useTheme } from '@mui/material';
import { Line } from '@mui/icons-material';

const ConcentricCircles = () => {
  const theme = useTheme();
  const classes = useStyles();

  const centerX = 200; 
  const centerY = 200;
  const innerRadius = 100;
  const outerRadius = 150;
  const beamCount = 12;

  const useStyles = () => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    circle: {
      stroke: theme.palette.primary.main,
      fill: 'none',
    },
    line: {
      stroke: theme.palette.primary.main,
    },
  });

  const calculatePointOnCircle = (angle, radius) => {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  const generateBeams = () => {
    const beams = [];
    const angleStep = (2 * Math.PI) / beamCount;

    for (let i = 0; i < beamCount; i++) {
      const angle = i * angleStep;
      const startPoint = calculatePointOnCircle(angle, innerRadius);
      const endPoint = calculatePointOnCircle(angle, outerRadius);

      beams.push(
        <Line
          key={i}
          className={classes.line}
          x1={startPoint.x}
          y1={startPoint.y}
          x2={endPoint.x}
          y2={endPoint.y}
        />
      );
    }

    return beams;
  };

  return (
    <SvgIcon className={classes.root} viewBox="0 0 400 400">
      <Circle
        className={classes.circle}
        cx={centerX}
        cy={centerY}
        r={innerRadius}
      />
      <Circle
        className={classes.circle}
        cx={centerX}
        cy={centerY}
        r={outerRadius}
      />
      {generateBeams()}
    </SvgIcon>
  );
};

export default ConcentricCircles;
