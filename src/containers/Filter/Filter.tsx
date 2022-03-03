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

  const handleChangeGender = (
    e: React.MouseEvent<HTMLElement>,
    newGender: string | null
  ) => {
    if (newGender !== null) {
      onChangeGender(newGender);
    }

    localStorage.setItem("gender", newGender!);
  };

  const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  const handleChangeResults = (e: SelectChangeEvent<number>) => {
    const value = e.target.value;
    onChangeResults(Number(value));

    localStorage.setItem("results", JSON.stringify(value));
  };

  const handleChangeNat = (e: SelectChangeEvent) => {
    const value = e.target.value;
    onChangeNat(value);

    localStorage.setItem("nat", value);
  };

  return (
    <Stack direction="row" justifyContent="space-between" spacing={6} p={3}>
      <div>
        <Typography>
          {trans.gender} :
          {filterValues.gender === "male" ? trans.male : trans.female}
        </Typography>
        <ToggleButtonGroup
          value={
            trans.gender === "male"
              ? localStorage.getItem("gender")
              : localStorage.getItem("gender")
          }
          exclusive
          onChange={handleChangeGender}
          aria-label="text alignment"
        >
          <ToggleButton value="male" color="primary">
            <MaleIcon />
          </ToggleButton>
          <ToggleButton value="female" color="primary">
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
          label={trans.results}
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
      <FormControl sx={{ width: 0.22 }}>
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