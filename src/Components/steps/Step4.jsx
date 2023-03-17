import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { renderButton, renderInputText, renderText } from '../common/displayComponents'

const Step4 = ({state,handleOnChange,handleNext,handlePrev}) => {
  return (
    <Box p={3}>
    {/* <Box mb={2}>
        {renderText({label:"Configuration Values",color:"black"})}
    </Box> */}
    <Grid container spacing={2} style={{marginBottom:"10px"}}>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"HK_Pay Account Id",
                name:"hkpay_account_id",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"HK_Pay Secret Key",
                name:"hkpay_secret_key",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={12}>
            {renderInputText({
                label:"Location Code",
                name:"location_code",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"S3 Secret Key",
                name:"s3_secret_key",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"S3 Access Key",
                name:"s3_access_key",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"S3 Upload Bucket",
                name:"s3_upload_bucket",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"S3 Download Bucket",
                name:"s3_download_bucket",
                state,
                handleOnChange
            })}
        </Grid>
    </Grid>
    <Grid container spacing={1} justifyContent="flex-end">
        <Grid item>
            <Box>
                {renderButton({label:"Back",color:"black",handleOnClick:handlePrev})} 
            </Box>
        </Grid>
        <Grid item>
            <Box>
                {renderButton({label:"Finish",color:"black",handleOnClick:handleNext})} 
            </Box>
        </Grid>
    </Grid>
</Box>
  )
}

export default Step4