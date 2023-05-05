import React from "react";
import { Box, Grid } from "@material-ui/core";
import { renderButton, renderInputText } from "../common/displayFormComponents";
import { useNavigate } from "react-router-dom";
const Step1 = ({ data, errors, handleOnChange, handleNext }) => {
  const navigate = useNavigate();
  const brandListPage = () => {
    navigate("/");
  };
  return (
    <Box p={4}>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            required: true,
            label: "Name",
            name: "name",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Prefix",
            name: "prefix",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={12}>
          {renderInputText({
            required: true,
            label: "Logo url",
            name: "logoUrl",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "Fevicon url",
            name: "fevicon_url",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Box>
          {renderButton({ label: "Back", handleOnClick: brandListPage })}
        </Box>
        <Box>{renderButton({ label: "Next", handleOnClick: handleNext })}</Box>
      </Grid>
    </Box>
  );
};

export default Step1;
