import { Avatar, Box } from "@mui/material";
import React from "react";
import SectionF from "./sectionF";

function Section() {
  return (
    <Box>
      <SectionF
        componentColor="#ececec"
        avatarColor="#fff"
        borderColor="#ccc"
      />
      <SectionF
        componentColor="#f4ccc9"
        avatarColor="#fff"
        borderColor="#cc9f9b"
      />
    </Box>
  );
}

export default Section;
