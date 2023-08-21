import { Box, Button, TextField, Typography, createTheme } from "@mui/material";
import React from "react";
import RichTextExample from "./post";
import MyButton from "@/components/myButton";

const Create = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#ba92ee" }}
    >
      <Box
        style={{
          width: "78%",
          padding: "20px",
          backgroundColor: "#9747ff",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", padding: "10px 0 30px 0" }}
        >
          Create something great.
        </Typography>
        <TextField
          color="secondary"
          label={
            <Typography variant="body" sx={{ color: "black" }}>
              Post title here...
            </Typography>
          }
          sx={{
            width: "100%",
            color: "black",
            backgroundColor: "#e6e6e6",
            borderColor: "black",
            marginBottom: "20px",
          }}
        />
        <RichTextExample />
        <MyButton />
      </Box>
    </Box>
  );
};

export default Create;
