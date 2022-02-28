import React, { useState, useEffect } from "react";

import { CircularProgress, List } from "@mui/material";

import { getUsers } from "../../api/User";
import Users from "../../components/User";
import { UserListProps } from "./UserList.types";
import { User } from "../../api/User.types";

const UserList: React.FC<UserListProps> = ({ filterValues }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

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
        <Users key={user.login.uuid} user={user} />
      ))}
    </List>
  );
};

export default UserList;
