import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { H2 } from "../../../../components/Tags";

const skills = ["html", "css", "javascript", "typescript", "react"];
const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  return (
    <>
      <H2>MuiAutoComplete</H2>
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          size="small"
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          //   freeSolo
        />
        <Autocomplete
          options={skillOptions}
          size="small"
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={skill}
          onChange={(e, newValue) => setSkill(newValue)}
        />
      </Stack>
    </>
  );
};

export default MuiAutoComplete;
