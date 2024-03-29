import { FC } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Progress: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="inherit" size={"22px"} />
    </Box>
  );
};

export default Progress;
