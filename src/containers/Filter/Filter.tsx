import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

import { useLocales } from "../../providers/LocalesProvider";
import { nat, results } from "./constans";
import { FilterProps } from "./Filter.types";

const Filter: React.FC<FilterProps> = ({
  filterValues,
  onChangeGender,
  onChangePage,
  onChangeResults,
  onChangeNat,
}) => {
  const { trans } = useLocales();

  const handleChangeGender = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangeGender(event.currentTarget.value);
  };

  const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  const handleChangeResults = (e: SelectChangeEvent<number>) => {
    const value = e.target.value;
    onChangeResults(Number(value));
  };

  const handleChangeNat = (e: SelectChangeEvent) => {
    const value = e.target.value;
    onChangeNat(value);

    localStorage.setItem("nat", value);
  };

  return (
    <Stack direction="row" justifyContent="space-between" p={2}>
      <div>
        <Typography>
          {trans.gender} :
          {filterValues.gender === "male" ? trans.male : trans.female}
        </Typography>
        <ToggleButtonGroup value={filterValues.gender}>
          <ToggleButton value="male" onClick={handleChangeGender}>
            <MaleIcon />
          </ToggleButton>
          <ToggleButton value="female" onClick={handleChangeGender}>
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
