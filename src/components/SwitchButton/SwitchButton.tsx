import React from "react";

import {
  Paper,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Typography,
  Box,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

import { useLocales } from "../../providers/LocalesProvider";
import { useTheme } from "../../providers/ThemeProvider";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { langs } from "providers/LocalesProvider/translations";

const SwitchButton: React.FC = () => {
  const { trans, toggleLang } = useLocales();
  const { theme, toggleTheme } = useTheme();

  return (
    <Paper elevation={4}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "35px",
          padding: "15px",
        }}
      >
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{trans.lang}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={langs.lang}
              label="languageChange"
              onChange={toggleLang}
            >
              <MenuItem value="ru">{trans.ru}</MenuItem>
              <MenuItem value="en">{trans.en}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel color="primary">{trans.changeTheme}</FormLabel>
          <FormControlLabel
            checked={theme === "dark"}
            onChange={toggleTheme}
            control={<MaterialUISwitch sx={{ m: 1 }} />}
            label={
              <Typography>
                {theme === "dark" ? trans.darkTheme : trans.lightTheme}
              </Typography>
            }
          />
        </FormControl>
      </Container>
    </Paper>
  );
};

export default SwitchButton;
