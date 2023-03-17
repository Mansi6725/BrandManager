import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { renderButton, renderInputText, renderText } from '../common/displayComponents'

const Step2 = ({state,handleOnChange,handleNext,handlePrev}) => {
  return (
    <Box p={4}>
    {/* <Box mb={2}>
        {renderText({label:"Brand Category node",color:"black"})}
    </Box> */}
    <Grid container spacing={2} style={{marginBottom:"10px"}}>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Category Name",
                name:"category_name",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Category Prefix",
                name:"category_prefix",
                state,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={12}>
            {renderInputText({
                label:"Parent menu node",
                name:"parent_menu_node",
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
                {renderButton({label:"Next",color:"black",handleOnClick:handleNext})} 
            </Box>
        </Grid>
    </Grid>
</Box>
  )
}

export default Step2
