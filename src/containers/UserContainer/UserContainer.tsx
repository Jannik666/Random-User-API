import React, { useState } from "react";

import { Container, Divider, Paper } from "@mui/material";

import Filter from "../Filter";
import UserList from "../UserList";
import SwitchButton from "../../components/SwitchButton";

const UserContainer: React.FC = () => {
  const [filterValues, setFilterValues] = useState({
    gender: "male",
    page: 1,
    results: 8,
    nat: localStorage.getItem("nat") || "AU",
  });

  const handleChangeGender = (gender: string) => {
    setFilterValues({ ...filterValues, gender });
  };

  const handleChangePage = (page: number) => {
    setFilterValues({ ...filterValues, page });
  };

  const handleChangeResults = (results: number) => {
    setFilterValues({ ...filterValues, results });
  };

  const handleChangeNat = (nat: string) => {
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
