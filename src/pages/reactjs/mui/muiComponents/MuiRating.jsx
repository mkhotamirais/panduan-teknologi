import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { H2 } from "../../../../components/Tags";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  console.log({ value });
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <H2>MuiRating</H2>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<FavoriteOutlined fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
          //   readOnly
          //   highlightSelectedOnly
        />
      </Stack>
    </>
  );
};

export default MuiRating;
