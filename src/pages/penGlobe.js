import { Avatar, Box } from "@mui/material";
import React from "react";
import Image from "next/image";

function PenGlobe({ myTop, mySrc, myAlt }) {
  return (
    <Avatar
      sx={{
        borderRadius: "0",
        transform: "rotate(45deg)",
        backgroundColor: "#fff",
        position: "fixed",
        top: myTop,
        right: "15px",
      }}
    >
      <Image src={mySrc} alt={myAlt} width={20} height={20} />
    </Avatar>
  );
}

export default PenGlobe;