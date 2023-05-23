import { Box } from "@mui/material";
import React from "react";
import MyCard from "./card";

function CardContainer() {
  return (
    <Box>
      <MyCard componentColor="#ececec" avatarColor="#fff" borderColor="#ccc" />
      <MyCard componentColor="#f4ccc9" avatarColor="#fff" borderColor="#cc9f9b" />
    </Box>
  );
}

export default CardContainer;
