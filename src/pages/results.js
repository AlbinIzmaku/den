import Header from "@/components/Header";
import MyCard from "@/components/card";
import CardContainer from "@/components/cardContainer";
import MyAvatar from "@/components/myAvatar";
import ResultCard from "@/components/resultCard";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";


function Results() {
  return (
    <Box sx={{ padding: "0 3.5%" }}>
      <Header />
      <Paper sx={{ marginTop: "10px", padding: "10px 0" }}>
        <Typography sx={{ display: "inline", marginLeft: "10px" }}>
          Your results for:{" "}
        </Typography>

        <Typography variant="h6" sx={{ display: "inline" }}>
          Albin Izmaku
        </Typography>
      </Paper>
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <MyCard
        componentColor="#f1d3ae"
        avatarColor="#fff"
        borderColor="#ccc"
        name="Albin Izmaku"
      />
    </Box>
  );
}

export default Results;
