import { Box } from "@mui/material";
import React from "react";
import MyCard from "./card";
import UserContext from "../store/UserContext";

function CardContainer() {
  return (
    <Box>
      <UserContext.Provider value="Albin Izmaku">
        <MyCard
          componentColor="#ececec"
          avatarColor="#fff"
          borderColor="#ccc"
          name="Albin Izmaku"
        />
      </UserContext.Provider>
      <UserContext.Provider value="Shpetim Selaci">
        <MyCard
          componentColor="#f4ccc9"
          avatarColor="#fff"
          borderColor="#cc9f9b"
          name="Shpetim Selaci"
        />
      </UserContext.Provider>
      <UserContext.Provider value="Shpetim Selaci">
        <MyCard
          componentColor="#f4ccc9"
          avatarColor="#fff"
          borderColor="#cc9f9b"
          name="Shpetim Selaci"
        />
      </UserContext.Provider>
      <UserContext.Provider value="Albin Izmaku">
        <MyCard
          componentColor="#ececec"
          avatarColor="#fff"
          borderColor="#ccc"
          name="Albin Izmaku"
        />
      </UserContext.Provider>
    </Box>
  );
}

export default CardContainer;
