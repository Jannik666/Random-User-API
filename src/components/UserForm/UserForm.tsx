import React from "react";

import { Card, CardMedia, DialogContent, Typography } from "@mui/material";

import { useLocales } from "../../providers/LocalesProvider";
import { UserFormProps } from "./UserForm.types";

const UserForm: React.FC<UserFormProps> = ({
  name,
  phone,
  picture,
  email,
  location,
}) => {
  const { trans } = useLocales();

  return (
    <DialogContent sx={{ padding: 0, width: 400 }}>
      <Card>
        <CardMedia alt="Avatar" component="img" src={picture.large} />
        <Typography>
          {name.title} {name.first} {name.last}
        </Typography>
        <Typography>
          {trans.phone} : {phone}
        </Typography>
        <Typography>
          {trans.email} : {email}
        </Typography>
        <Typography>
          {trans.location} : {location.state} {location.city}
        </Typography>
      </Card>
    </DialogContent>
  );
};

export default UserForm;
