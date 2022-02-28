import React, { useState } from "react";

import { Container, Divider, Paper } from "@mui/material";

import Filter from "../Filter";
import UserList from "../UserList";
import SwitchButton from "../../components/SwitchButton";

const UserContainer = () => {
  const [filterValues, setFilterValues] = useState({
    gender: localStorage.getItem("gender") || "male",
    page: 1,
    results: localStorage.getItem("results") || 8,
    nat: localStorage.getItem("nat") || "AU",
  });

  const handleChangeGender = (gender) => {
    setFilterValues({ ...filterValues, gender });
  };

  const handleChangePage = (page) => {
    setFilterValues({ ...filterValues, page });
  };

  const handleChangeResults = (results) => {
    setFilterValues({ ...filterValues, results });
  };

  const handleChangeNat = (nat) => {
    setFilterValues({ ...filterValues, nat });
  };

  return (
    <Paper elevation={3} variant="outlined">
      <SwitchButton />
      <Container>
        <Filter
          filterValues={filterValues}
          onChangeGender={handleChangeGender}
          onChangePage={handleChangePage}
          onChangeResults={handleChangeResults}
          onChangeNat={handleChangeNat}
        />
        <Divider />
        <UserList filterValues={filterValues} />
      </Container>
    </Paper>
  );
};

export default UserContainer;
