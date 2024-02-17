import React from "react";
import { Grid } from "@mui/material";

const GridContainer = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: 200,
        width: "100%",
        backgroundColor: "lightgray",
        marginRight: 5, // Add margin for horizontal spacing
      }}
    />
  );
};

export default GridContainer;
