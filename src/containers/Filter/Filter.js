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
import { nat } from "./constans";

const Filter = ({
  filterValues,
  onChangeGender,
  onChangePage,
  onChangeResults,
  onChangeNat,
}) => {
  const { trans } = useLocales();

  const handleChangeGender = (e) => {
    const value = e.currentTarget.value;
    onChangeGender(value);
  };

  const handleChangePage = (e, value) => {
    onChangePage(value);
  };

  const handleChangeResults = (e) => {
    const value = e.target.value;
    onChangeResults(value);
  };

  const handleChangeNat = (e) => {
    const value = e.target.value;
    onChangeNat(value);
  };

  return (
    <Stack direction="row" justifyContent="space-between" p={2}>
      <div>
        <Typography>
          {trans.gender} :
          {filterValues.gender === "male" ? trans.male : trans.female}
        </Typography>
        <ToggleButtonGroup value={filterValues.gender}>
          <ToggleButton
            value="male"
            variant="contained"
            onClick={handleChangeGender}
          >
            <MaleIcon />
          </ToggleButton>
          <ToggleButton
            value="female"
            variant="contained"
            onClick={handleChangeGender}
          >
            <FemaleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Stack>
        <Typography>
          {trans.page}: {filterValues.page}
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
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 0.2 }}>
        <InputLabel id="nat">{trans.nat}</InputLabel>
        <Select
          id="nat"
          label="Nat"
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
