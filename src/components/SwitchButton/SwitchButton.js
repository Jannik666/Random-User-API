import React from "react";

import {
  Paper,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import { useLocales } from "../../providers/LocalesProvider";
import { useTheme } from "../../providers/ThemeProvider";
import { MaterialUISwitch } from "./MaterialUISwitch";

const SwitchButton = () => {
  const { trans, toggleLang } = useLocales();
  const { theme, toggleTheme } = useTheme();

  return (
    <Paper elevation={0}>
      <Container
        sx={{ display: "flex", justifyContent: "flex-end", gap: "35px" }}
      >
        <FormControl>
          <FormLabel color="primary">{trans.lang}</FormLabel>
          <RadioGroup row onChange={toggleLang}>
            <FormControlLabel
              checked={trans.langs}
              value="en"
              control={<Radio />}
              label="EN"
            />
            <FormControlLabel
              checked={trans.langs}
              value="ru"
              control={<Radio />}
              label="RU"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel color="primary">{trans.changeTheme}</FormLabel>
          <FormControlLabel
            checked={theme === "dark"}
            onChange={toggleTheme}
            control={<MaterialUISwitch sx={{ m: 1 }} />}
            label={
              <Typography>
                {theme === "ligth" ? trans.ligthTheme : trans.darkTheme}
              </Typography>
            }
          />
        </FormControl>
      </Container>
    </Paper>
  );
};

export default SwitchButton;
