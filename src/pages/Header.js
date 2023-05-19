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
} from "@mui/material";
import { Search } from "@mui/icons-material";

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

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box color="primary" height="20vh">
        <AppBar>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Avatar />
              <Typography color="secondary" variant="h4">
                Den
              </Typography>
            </Box>
            <TextField
              sx={{ backgroundColor: "white", width: "45%" }}
              placeholder="search for posts, devs..."
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <Search />
                  </IconButton>
                ),
              }}
            />
            <Avatar
              sx={{ bgcolor: "white", width: 40, height: 40 }}
              src="/avatar2.png"
            />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
