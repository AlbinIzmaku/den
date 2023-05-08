import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { Search } from '@mui/icons-material'

function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar display="flex">
          <Typography>Den</Typography>
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
