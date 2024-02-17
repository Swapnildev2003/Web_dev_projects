import React from "react";
import { Grid } from "@mui/material";

const GridContainer = ({ heightGrid, widthGrid }) => {
  console.log(heightGrid, widthGrid);
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: heightGrid,
        width: widthGrid,
        backgroundColor: "lightgray",
        marginRight: 5, // Add margin for horizontal spacing
      }}
    />
  );
};

export default GridContainer;
