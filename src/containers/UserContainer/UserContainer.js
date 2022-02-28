import React, { useState } from "react";

import { Container, Divider, Paper } from "@mui/material";

import Filter from "../Filter";
import UserList from "../UserList";
import SwitchButton from "../../components/SwitchButton";

const UserContainer = () => {
  const [filterValues, setFilterValues] = useState({
    gender: "male",
    page: 1,
    results: 8,
    nat: "AU",
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
    <Paper elevation={1}>
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
