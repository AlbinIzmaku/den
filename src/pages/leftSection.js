import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import MyCircle from "./circle";

function leftSection() {
  return (
    <Box
      sx={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
      }}
    >
      <Avatar
        sx={{
          bgcolor: "#ececec",
          width: 47,
          height: 47,
          overflow: "visible",
          border: "1px dashed #c3c2c2",

          "& img": {
            width: 35,
            height: 35,
            borderRadius: "3px",
            outline: "1px solid #c3c2c2",
            outlineOffset: "2px",
            boxShadow:
              "2px 2px #fff, -2px -2px #fff, 2px -2px #fff, -2px 2px #fff",
          },
        }}
        src="/avatar.png"
      ></Avatar>
      <Box sx={{display: 'flex'}}>
        <Typography sx={{ border: "1px solid black", mr: '5px', boxShadow: '2px 2px black' }}>CTO</Typography>
        <Typography sx={{ border: "1px solid black", mr: '5px', boxShadow: '2px 2px black' }}>Software Engineer</Typography>
      </Box>
      <MyCircle />
    </Box>
  );
}

export default leftSection;
