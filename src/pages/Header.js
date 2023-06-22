import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  createTheme,
  ThemeProvider,
  Avatar,
  SvgIcon,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Image from "next/image";
import InputField from "./inputField";


const theme = createTheme({
  palette: {
    primary: {
      main: "#9747ff",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function MySvgIcon() {
  return <Image src="logo.svg" alt="logo" width={30} height={30} />;
}

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box color="primary" height="10vh">
        <AppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "90px",
                alignItems: "center",
              }}
            >
              <MySvgIcon />
              <Typography variant="h5">Den</Typography>
            </Box>
            <InputField />
            <Avatar
              sx={{
                bgcolor: "white",
                width: 47,
                height: 47,
                overflow: "visible",
                "& img": {
                  width: 35,
                  height: 35,
                  borderRadius: "3px",
                  outline: "1px solid #c3c2c2",
                  outlineOffset: "2px",
                  boxShadow:
                    "2px 2px #fff, -2px -2px #fff, 2px -2px #fff, -2px 2px #fff",
                },
              }}
              src="/avatar.png"
            ></Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
