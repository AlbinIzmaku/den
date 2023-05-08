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
      main: "#000",
    },
  },
});

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box color="primary">
        <AppBar>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography color="secondary">Den</Typography>
            <TextField
              sx={{backgroundColor: 'white', width: '45%'}}
              placeholder="search for posts, devs..."
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <Search />
                  </IconButton>
                ),
              }}
            />
            <Avatar sx={{ bgcolor: 'white', width: 40, height: 40}}></Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
