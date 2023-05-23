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

function MySvgIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 80 72">
      <svg
        width="80"
        height="72"
        viewBox="0 0 80 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.9862 1.54024C38.268 -0.513409 41.732 -0.513414 44.0138 1.54023L78.0138 31.5402C80.6621 33.9237 80.6621 38.0763 78.0138 40.4598L44.0138 70.4598C41.732 72.5134 38.268 72.5134 35.9862 70.4598L1.98621 40.4598C-0.662068 38.0763 -0.662073 33.9237 1.98621 31.5402L35.9862 1.54024Z"
          fill="#FFE8A3"
        />
        <path
          d="M30 27H48"
          stroke="#1E1E1E"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27 52H53"
          stroke="#1E1E1E"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
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
            <TextField
              sx={{ width: "45%" }}
              placeholder="search for posts, devs..."
              InputProps={{
                style: { background: "white" },
                startAdornment: (
                  <IconButton>
                    <Search />
                  </IconButton>
                ),
              }}
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
            ></Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
