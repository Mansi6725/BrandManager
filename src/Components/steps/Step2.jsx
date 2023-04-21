import { Box, Grid} from '@material-ui/core'
import React from 'react'
import { renderButton, renderInputText} from '../common/displayComponents'

const Step2 = ({data,errors,handleOnChange,handleNext,handlePrev}) => {
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
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Category Prefix",
                name:"category_prefix",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Parent menu node",
                name:"parent_menu_node",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Menu_Node_Name",
                name:"menu_name",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
    </Grid>
    <Grid container spacing={1} justifyContent="flex-end">
        <Grid item>
            <Box>
                {renderButton({label:"Back",handleOnClick:handlePrev})} 
            </Box>
        </Grid>
        <Grid item>
            <Box>
                {renderButton({label:"Next",handleOnClick:handleNext})} 
            </Box>
        </Grid>
    </Grid>
</Box>
  )
}

export default Step2
