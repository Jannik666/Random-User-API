import React from "react";

import {
  Paper,
  Container,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { useLocales } from "../../providers/LocalesProvider";

const SwitchButton = () => {
  const { trans, toggleLang } = useLocales();

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
              value="RU"
              control={<Radio />}
              label="RU"
            />
          </RadioGroup>
        </FormControl>
      </Container>
    </Paper>
  );
};

export default SwitchButton;

// export default function LocalSwitch() {
// 	const { i18n } = useTranslation();
// 	const handleChangeLang = () => {
// 		if (i18next.language === 'ru') {
// 			i18n.changeLanguage('en');
// 		} else {
// 			i18n.changeLanguage('ru');
// 		}
// 	};
// 	return (
// 		<Stack direction='row' spacing={1} alignItems='center'>
// 			<Typography>RU</Typography>
// 			<AntSwitch
// 				onChange={handleChangeLang}
// 				defaultChecked
// 				inputProps={{ 'aria-label': 'ant design' }}
// 			/>
// 			<Typography>EN</Typography>
// 		</Stack>
// 	);
