import React, { useState, useEffect } from "react";

import { CircularProgress, List } from "@mui/material";

import { getUsers } from "../../api/User";
import User from "../../components/User";

const UserList = ({ filterValues }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    getUsers(filterValues)
      .then((users) => setUsers(users))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [filterValues]);

  return (
    <List sx={{ textAlign: "center" }}>
      {loading && <CircularProgress size={70} />}
      {error && "Error..."}
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </List>
  );
};

export default UserList;
