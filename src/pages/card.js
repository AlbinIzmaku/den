import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

function MyCard({ componentColor, avatarColor, borderColor }) {
  return (
    <Card
      sx={{
        margin: "20px 100px",
        backgroundColor: componentColor,
        borderWidth: "1px",
        border: `1px solid ${borderColor}`,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: avatarColor,
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
          ></Avatar>
        }
        title="Albin Izmaku"
        subheader="Astronaut"
      />
      <CardContent>
        <Typography variant="body2" component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using &apos;Content here, content here, making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for lorem ipsum will uncover many web sites still in their infancy.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;
