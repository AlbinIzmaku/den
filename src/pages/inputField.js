import { Search } from "@mui/icons-material";
import { Container, IconButton, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function InputField() {
  const [searchName, setSearchName] = useState("");
  const [matchingUsers, setMatchingUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setMatchingUsers(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchName = (event) => {
    const query = event.target.value.toLowerCase();
    const matchedUsers = matchingUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setMatchingUsers(matchedUsers);
    setSearchName(event.target.value);
  };

  return (
    <>
      <Container sx={{ position: "relative", width: "45%" }}>
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
          value={searchName}
          onChange={handleSearchName}
        />
        {matchingUsers.length > 0 && (
          <Container sx={{ position: "absolute", top: "100%", left: 0, marginTop: "0.5rem", backgroundColor: "#fff", padding: "0.5rem", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
            {matchingUsers.map((user) => (
              <Typography key={user.id} variant="body1">
                {user.name}
              </Typography>
            ))}
          </Container>
        )}
      </Container>
    </>
  );
}

export default InputField;
