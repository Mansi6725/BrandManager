import { Box, Grid } from "@material-ui/core";
import React from "react";
import { renderButton, renderInputText } from "../common/displayFormComponents";

const Step3 = ({ data, errors, handleOnChange, handleNext, handlePrev }) => {
  return (
    <Box p={4}>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "Page Type",
            name: "page_type",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "Page Id",
            // type:"number",
            name: "page_id",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid item>
          <Box>
            {renderButton({ label: "Back", handleOnClick: handlePrev })}
          </Box>
        </Grid>
        <Grid item>
          <Box>
            {renderButton({ label: "Next", handleOnClick: handleNext })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step3;
