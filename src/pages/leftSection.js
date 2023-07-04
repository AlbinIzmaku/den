import React, { useState, useEffect, useRef } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import MyCircle from "./circle";
import RectangleRating from "./myRectangle";

function LeftSection() {
  const [avatarWidth, setAvatarWidth] = useState(0);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (avatarRef.current) {
      const width = avatarRef.current.offsetWidth;
      setAvatarWidth(width);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        ref={avatarRef}
        sx={{
          mt: "10px",
          bgcolor: "#ececec",
          width: "66%",
          height: avatarWidth ? `${avatarWidth}px` : "",
          overflow: "visible",
          border: "1px dashed #c3c2c2",

          "& img": {
            width: "78%",
            height: "78%",
            borderRadius: "3px",
            outline: "1px solid #c3c2c2",
            outlineOffset: "2px",
            boxShadow:
              "2px 2px #fff, -2px -2px #fff, 2px -2px #fff, -2px 2px #fff",
          },
        }}
        src="/avatar.png"
      ></Avatar>
      <Box sx={{ display: "flex", margin: "10px 0" }}>
        <Typography
          sx={{
            border: "1px solid black",
            mr: "5px",
            boxShadow: "2px 2px black",
          }}
        >
          CTO
        </Typography>
        <Typography
          sx={{
            border: "1px solid black",
            mr: "5px",
            boxShadow: "2px 2px black",
          }}
        >
          Software Engineer
        </Typography>
      </Box>
      <MyCircle />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "10px"
        }}
      >
        <Typography>Goals decided to commit</Typography>
        <RectangleRating color="#8f5aa3" />
        <Typography>Fahrids Suggestion On Goals</Typography>
        <RectangleRating color="#fd535d" />
        <Typography>Fahrids Suggestion On Goals</Typography>
        <RectangleRating color="#ca9000" />
      </Box>
    </Box>
  );
}

export default LeftSection;
