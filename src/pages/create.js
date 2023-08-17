import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import RichTextExample from "./post";

const Create = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box
        style={{
          border: "1px solid black",
          width: "78%",
          border: "1px solid black",
          padding: "20px",
          backgroundColor: "#9747ff"
        }}
      >
        <Typography variant="h5">Create something great.</Typography>
        <TextField label="Post something here..." sx={{width: "100%", color: "black", backgroundColor: "#e6e6e6"}} />
        <RichTextExample />
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  );
};

export default Create;
