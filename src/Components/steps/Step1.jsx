import React from 'react'
import {Paper, Box,Grid} from '@material-ui/core'
import { renderButton, renderInputText, renderText } from '../common/displayComponents'
const Step1 = ({state,handleOnChange,handleNext}) => {
  return (
    <Box p={4}>
        {/* <Box mb={2}>
            {renderText({label:"Brand name and url",color:"black"})}
        </Box> */}
        <Grid container spacing={2} style={{marginBottom:"10px"}}>
            <Grid item xs={12} sm={6}>
                {renderInputText({
                    label:"Name",
                    name:"name",
                    state,
                    handleOnChange
                })}
            </Grid>
            <Grid item xs={12} sm={6}>
                {renderInputText({
                    label:"Prefix",
                    name:"prefix",
                    state,
                    handleOnChange
                })}
            </Grid>
            <Grid item xs={12} sm={12}>
                {renderInputText({
                    label:"Logo url",
                    name:"logo_url",
                    state,
                    handleOnChange
                })}
            </Grid>
            <Grid item xs={12} sm={12}>
                {renderInputText({
                    label:"Fevicon url",
                    name:"fevicon_url",
                    state,
                    handleOnChange
                })}
            </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
            <Box>
                {renderButton({label:"Next",color:"black",handleOnClick:handleNext})} 
            </Box>
        </Grid>
    </Box>
  )
}

export default Step1
