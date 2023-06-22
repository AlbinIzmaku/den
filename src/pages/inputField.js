import { Search } from "@mui/icons-material";
import { Container, IconButton, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

function InputField() {
  const [inputName, setInputName] = useState("");
  const [matchedName, setMatchedName] = useState(["Albin", "Seladin", "Olti", "Shpetim"]);
  const [filteredNames, setFilteredNames] = useState([]);

  const inputFieldRef = useRef(null);

  useEffect(() => {
    inputFieldRef.current.focus();
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
        inputRef={inputFieldRef}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default InputField;
