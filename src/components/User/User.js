import React, { useReducer } from "react";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Dialog,
  Divider,
} from "@mui/material";

import UserForm from "../UserForm";

const User = ({ user }) => {
  const { picture, name, phone } = user;
  const { title, first, last } = name;
  const [open, toggle] = useReducer((prev) => !prev, false);

  return (
    <>
      <ListItem
        onClick={toggle}
        alignItems="flex-start"
        sx={{ cursor: "pointer" }}
      >
        <ListItemAvatar>
          <Avatar alt="Avatar" src={picture.large} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography>
              {title} {first} {last}
            </Typography>
          }
          secondary={phone}
        />
      </ListItem>
      <Dialog open={open} onClose={toggle}>
        <UserForm {...user} />
      </Dialog>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default User;
