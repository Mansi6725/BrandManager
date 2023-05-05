import { Box, Grid } from "@material-ui/core";
import React from "react";
import { renderButton, renderInputText } from "../common/displayFormComponents";

const Step4 = ({ data, errors, handleOnChange, handleNext, handlePrev }) => {
  return (
    <Box p={3}>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "HK_Pay Account Id",
            name: "hkpay_account_id",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "HK_Pay Secret Key",
            name: "hkpay_secret_key",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={12}>
          {renderInputText({
            label: "Location Code",
            name: "location_code",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "S3 Secret Key",
            name: "s3_secret_key",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "S3 Access Key",
            name: "s3_access_key",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "S3 Upload Bucket",
            name: "s3_upload_bucket",
            data,
            errors,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "S3 Download Bucket",
            name: "s3_download_bucket",
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

export default Step4;
