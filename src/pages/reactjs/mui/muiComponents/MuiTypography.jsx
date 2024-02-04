import { Typography } from "@mui/material";
import { H2 } from "../../../../components/Tags";

const MuiTypography = () => {
  return (
    <>
      <H2>mui typography</H2>
      <Typography variant="h1">h1. Heading1</Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        h2. Heading2
      </Typography>
      <Typography variant="h3">h3. Heading3</Typography>
      <Typography variant="h4">h4. Heading4</Typography>
      <Typography variant="h5">h5. Heading5</Typography>
      <Typography variant="h5">h6. Heading6</Typography>

      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle2</Typography>

      <Typography variant="body1">Body1</Typography>
      <Typography variant="body2">Body2</Typography>
    </>
  );
};

export default MuiTypography;
