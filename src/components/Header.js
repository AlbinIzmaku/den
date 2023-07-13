import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import SearchBar from "./searchBar";
import Link from "next/link";

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
              <Link href="/">
                <MySvgIcon />
              </Link>

              <Typography variant="h5">Den</Typography>
            </Box>
            <SearchBar />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "10%",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "0",
                  transform: "rotate(45deg)",
                  backgroundColor: "#fff",
                  "& img": {
                    width: 15,
                    height: 15,
                  },
                }}
                src="/message.svg"
                alt="Message"
              />
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
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
