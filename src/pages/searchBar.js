import { Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

function SearchBar() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [matchedNames, setMatchedNames] = useState([
    "Albin Izmaku",
    "Olti Izmaku",
    "Shpetim Selaci",
    "Seladin Izmaku",
  ]);
  const [filteredNames, setFilteredNames] = useState(matchedNames);
  const [isTextFieldVisible, setTextFieldVisible] = useState(false);
  const skill = ["Front-End", "Back-End", "Full-Stack", "Software Engineer"];
  const textFieldRef = useRef(null);

  const handleClick = () => {
    if (!isTextFieldVisible) {
      setTextFieldVisible(true);
      setFilteredNames(matchedNames);
    }
  };

  const handlePageClick = (event) => {
    if (
      isTextFieldVisible &&
      textFieldRef.current &&
      !textFieldRef.current.contains(event.target)
    ) {
      setTextFieldVisible(false);
      setFilteredNames([]);
    }
  };

  const handleChange = (event) => {
    const letter = event.target.value;
    setName(letter);

    const filteredNames = matchedNames.filter((matched) => {
      return matched.toLowerCase().includes(letter.toLowerCase());
    });

    setFilteredNames(filteredNames);
  };

  useEffect(() => {
    setFilteredNames(matchedNames);
  }, [matchedNames]);

  useEffect(() => {
    document.addEventListener("click", handlePageClick);

    return () => {
      document.removeEventListener("click", handlePageClick);
    };
  }, []);

  return (
    <>
      <Box sx={{ position: "relative", width: "50%" }}>
        <TextField
          sx={{ width: "100%" }}
          placeholder="search for posts, devs..."
          InputProps={{
            style: { background: "white" },
            startAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
          }}
          value={name}
          onChange={handleChange}
          onClick={handleClick}
          inputRef={textFieldRef}
          readOnly={!isTextFieldVisible}
        />
        {isTextFieldVisible && (
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              marginTop: "5px",
            }}
          >
            {filteredNames.length > 0 ? (
              <List sx={{ backgroundColor: "white" }}>
                {filteredNames.map((element, index) => (
                  <ListItem
                    key={element}
                    onClick={() => {
                      router.push({
                        pathname: "user",
                        query: {
                          myName: element,
                          profession: skill[index % skill.length],
                        },
                      });
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor: "#fff",
                          width: 47,
                          height: 47,
                          overflow: "visible",
                          border: "1px dashed #c3c2c2",

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
                    </ListItemAvatar>
                    <Link
                      href={{
                        pathname: "user",
                        query: {
                          myName: element,
                          profession: skill[index % skill.length],
                        },
                      }}
                      underline="none"
                    >
                      <ListItemText
                        primary={element}
                        secondary={skill[index % skill.length]}
                        sx={{
                          color: "black",
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography>No matching results</Typography>
            )}
          </Box>
        )}
      </Box>
    </>
  );
}

export default SearchBar;
