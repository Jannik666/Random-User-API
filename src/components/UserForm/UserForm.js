import React from "react";

import { Card, CardMedia, DialogContent, Typography } from "@mui/material";
import { useLocales } from "../../providers/LocalesProvider";

const UserForm = ({ name, phone, picture, email, location }) => {
  const { trans } = useLocales();

  return (
    <DialogContent sx={{ padding: 0, width: 250 }}>
      <Card>
        <CardMedia alt="Avatar" component="img" src={picture.large} />
        <Typography>
          {name.title} {name.first} {name.last}
        </Typography>
        <Typography>
          {trans.translation.phone} : {phone}
        </Typography>
        <Typography>
          {trans.translation.email} : {email}
        </Typography>
        <Typography>
          {trans.translation.location} : {location.state} {location.city}
        </Typography>
      </Card>
    </DialogContent>
  );
};

export default UserForm;
