import { Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

function InputField() {
  const [inputName, setInputName] = useState("");
  const [matchedName, setMatchedName] = useState([
    "Albin Izmaku",
    "Seladin Izmaku",
    "Olti Izmaku",
    "Shpetim Izmaku",
  ]);
  const [profession, setProfession] = useState([
    "Front-End",
    "Back-End",
    "Full-Stack",
    "Developer",
  ]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [textFieldWidth, setTextFieldWidth] = useState("50%");

  const inputFieldRef = useRef(null);

  useEffect(() => {
    inputFieldRef.current.focus();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const textFieldWidth = `${inputFieldRef.current.offsetWidth}px`;
      setTextFieldWidth(textFieldWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKeyDown = (event) => {
    const inputLetter = event.target.value;
    setInputName(inputLetter);

    const filteredNames = matchedName.filter((name) =>
      name.toLowerCase().includes(inputLetter.toLowerCase())
    );

    setFilteredNames(filteredNames);
  };

  return (
    <>
      <TextField
        ref={inputFieldRef}
        sx={{ position: "relative", color: "black", width: textFieldWidth }}
        placeholder="search for posts, devs..."
        InputProps={{
          style: { background: "white" },
          startAdornment: (
            <IconButton>
              <Search />
            </IconButton>
          ),
        }}
        value={inputName}
        onChange={handleKeyDown}
      />

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "100%",
          backgroundColor: "white",
          width: textFieldWidth,
        }}
      >
        <List sx={{ color: "black" }}>
          {filteredNames.map((name, index) => (
            <ListItem key={index}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
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
                <Box>
                  <Typography sx={{ marginLeft: "10px" }}>{name}</Typography>
                  <Typography
                    sx={{ marginLeft: "10px" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {profession[index]}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default InputField;
