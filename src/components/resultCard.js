import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import MyAvatar from "./myAvatar";

function ResultCard() {
  return (
    <Card sx={{ display: "flex", alignItems: "center", marginTop: "1%", marginBottom: "1%"}}>
      <CardHeader
        avatar={<MyAvatar />}
        title="Albin Izmaku"
        subheader="Front End"
      />
      <CardContent sx={{ display: "flex" }}>
        <Typography
          sx={{
            border: "1px solid black",
            mr: "20px",
            boxShadow: "2px 2px black",
          }}
        >
          CTO
        </Typography>
        <Typography
          sx={{
            border: "1px solid black",
            boxShadow: "2px 2px black",
          }}
        >
          Software Engineer
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResultCard;
