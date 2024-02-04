import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import { H2 } from "../../../../components/Tags";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <H2>MuiSwitch</H2>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={checked} onChange={handleChange} size="small" color="secondary" />}
        />
      </Box>
      <p>Tugas: checkbox group, lihat halaman checkbox, ganti checkbox jadi switch</p>
    </>
  );
};

export default MuiSwitch;
