import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

import { useLocales } from "../../providers/LocalesProvider";
import { nat, results } from "./constans";

const Filter = ({
  filterValues,
  onChangeGender,
  onChangePage,
  onChangeResults,
  onChangeNat,
}) => {
  const { trans } = useLocales();

  const handleChangeGender = (e, newGender) => {
    if (newGender !== null) onChangeGender(newGender);

    localStorage.setItem("gender", newGender);
  };

  const handleChangePage = (e, value) => {
    onChangePage(value);
  };

  const handleChangeResults = (e) => {
    const value = e.target.value;
    onChangeResults(value);

    localStorage.setItem("results", value);
  };

  const handleChangeNat = (e) => {
    const value = e.target.value;
    onChangeNat(value);

    localStorage.setItem("nat", JSON.stringify(value));
  };

  return (
    <Stack direction="row" spacing={8} p={2}>
      <div>
        <Typography>
          {trans.gender} :{" "}
          {filterValues.gender === "male" ? trans.male : trans.female}
        </Typography>
        <ToggleButtonGroup value={filterValues.gender}>
          <ToggleButton
            value="male"
            color="primary"
            onClick={handleChangeGender}
          >
            <MaleIcon />
          </ToggleButton>
          <ToggleButton
            value="female"
            color="primary"
            onClick={handleChangeGender}
          >
            <FemaleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Stack>
        <Typography>
          {trans.page} : {filterValues.page}
        </Typography>
        <Pagination
          count={50}
          page={filterValues.page}
          onChange={handleChangePage}
        />
      </Stack>
      <FormControl sx={{ width: 0.2 }}>
        <InputLabel id="results">{trans.results}</InputLabel>
        <Select
          id="results"
          label="Results"
          name="Results"
          value={filterValues.results}
          onChange={handleChangeResults}
        >
          {results.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: 0.2 }}>
        <InputLabel id="nat">{trans.nationality}</InputLabel>
        <Select
          id="nat"
          label={trans.nationality}
          name="Nat"
          value={filterValues.nat}
          onChange={handleChangeNat}
        >
          {nat.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Filter;
