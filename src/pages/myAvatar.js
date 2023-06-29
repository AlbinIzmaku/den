import { Avatar } from "@mui/material";
import React from "react";

function MyAvatar() {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: "#fff",
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
      />
    </>
  );
}

export default MyAvatar;
