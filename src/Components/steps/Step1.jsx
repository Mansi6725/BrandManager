import React from 'react'
import {Box,Grid} from '@material-ui/core'
import { renderButton, renderInputText} from '../common/displayComponents'
const Step1 = ({data,errors,handleOnChange,handleNext}) => {
  return (
    <Box p={4}>
        {/* <Box mb={2}>
            {renderText({label:"Brand name and url",color:"black"})}
        </Box> */}
        <Grid container spacing={2} style={{marginBottom:"10px"}}>
            <Grid item xs={12} sm={6}>
                {renderInputText({
                    required:true,
                    label:"Name",
                    name:"name",
                    data,
                    errors,
                    handleOnChange
                })}
            </Grid>
            <Grid item xs={12} sm={6}>
                {renderInputText({
                    label:"Prefix",
                    name:"prefix",
                    data,
                    errors,
                    handleOnChange
                })}
            </Grid>
            <Grid item xs={12} sm={12}>
                {renderInputText({
                    required:true,
                    label:"Logo url",
                    name:"logoUrl",
                    data,
                    errors,
                    handleOnChange
                })}
            </Grid>
            <Grid item xs={12} sm={12}>
                {renderInputText({
                    label:"Fevicon url",
                    name:"fevicon_url",
                    data,
                    errors,
                    handleOnChange
                })}
            </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
            <Box>
                {renderButton({label:"Next",handleOnClick:handleNext})} 
            </Box>
        </Grid>
    </Box>
  )
}

export default Step1
