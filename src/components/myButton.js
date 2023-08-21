import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

export default function MyButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        sx={{ marginTop: "30px", padding: "10px 40px" }}
      >
        Submit
      </Button>
    </ThemeProvider>
  );
}
