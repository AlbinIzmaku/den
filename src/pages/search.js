import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import MyCard from "../components/card";
import UserContext from "../store/UserContext";
import Header from "../components/Header";
import LeftSection from "@/components/leftSection";
import PenGlobeContainer from "@/components/penGlobeContainer";

function Search() {
  const router = useRouter();
  const myName = router.query.myName || "";
  const profession = router.query.profession || "";
  const nameFromContext = useContext(UserContext);

  console.log(nameFromContext);

  return (
    <Box sx={{ backgroundColor: "#d9d9d9" }}>
      <Header />
      <Grid container>
        <Grid
          item
          sx={{ width: "23.02%", marginLeft: "0.7%", marginRight: "2.4%" }}
        >
          <LeftSection />
        </Grid>
        <Grid item sx={{ width: "65%" }}>
          {myName === "Albin Izmaku" && (
            <>
              <MyCard
                componentColor="#ececec"
                avatarColor="#fff"
                borderColor="#ccc"
                name="Albin Izmaku"
              />
              <MyCard
                componentColor="#ececec"
                avatarColor="#fff"
                borderColor="#ccc"
                name="Albin Izmaku"
              />
              <MyCard
                componentColor="#ececec"
                avatarColor="#fff"
                borderColor="#ccc"
                name="Albin Izmaku"
              />
            </>
          )}
          {myName === "Shpetim Selaci" && (
            <MyCard
              componentColor="#f4ccc9"
              avatarColor="#fff"
              borderColor="#cc9f9b"
              name="Shpetim"
            />
          )}
        </Grid>
        <Grid item>
          <PenGlobeContainer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Search;
