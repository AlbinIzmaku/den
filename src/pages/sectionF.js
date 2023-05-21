import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

function SectionF() {
  return (
    <Box sx={{border: '1px solid black', display: 'flex'}}>
      <Avatar
        sx={{
          bgcolor: "white",
          width: 40,
          height: 40,
          border: "1px dashed black",
          overflow: "visible",
          "& img": {
            width: 35,
            height: 35,
          },
        }}
        src="/avatar2.png"
      />
      <Typography>Albin Izmaku</Typography>
      <Typography>Astronaut</Typography>
    </Box>
  );
}

export default SectionF;
