import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MyCard from "./card";
import CardContainer from "./cardContainer";
import MyAvatar from "./myAvatar";

function User() {
  const router = useRouter();
  const myName = router.query.myName || "";
  const profession = router.query.profession || "";

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "80px",
          padding: "5px",
        }}
      >
        <Typography>Your results for:</Typography>
        <Typography variant="h6" sx={{ marginLeft: "5px" }}>
          {myName}
        </Typography>
      </Paper>
      {myName === "Albin Izmaku" && (
        <MyCard
          componentColor="#ececec"
          avatarColor="#fff"
          borderColor="#ccc"
          name="Albin Izmaku"
        />
      )}
      {myName === "Shpetim Selaci" && (
        <MyCard
          componentColor="#f4ccc9"
          avatarColor="#fff"
          borderColor="#cc9f9b"
          name="Shpetim"
        />
      )}
    </Box>
  );
}

export default User;
