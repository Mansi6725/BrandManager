import { Box, Grid} from '@material-ui/core'
import React from 'react'
import { renderButton, renderInputText} from '../common/displayComponents'

const Step5 = ({data,errors,handleOnChange,handleNext,handlePrev}) => {
  return (
    <Box p={3}>
    <Grid container spacing={2} style={{marginBottom:"10px"}}>
        <Grid item xs={12} sm={12}>
            {renderInputText({
                required:true,
                label:"Domain",
                name:"domain",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Domain Name",
                name:"domainName",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Domain Type",
                name:"domainType",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"From Email",
                name:"fromEmail",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"Reply Email",
                name:"replyEmail",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                label:"From Name",
                name:"fromName",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {renderInputText({
                required:true,
                label:"ApiKey",
                name:"apiKey",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={12}>
            {renderInputText({
                label:"Mail ClientId",
                name:"mailClientId",
                data,
                errors,
                handleOnChange
            })}
        </Grid>
        <Grid item xs={12} sm={12}>
            {renderInputText({
                label:"Parent Domain",
                name:"parentDomain",
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
                {renderButton({label:"Finish",handleOnClick:handleNext})} 
            </Box>
        </Grid>
    </Grid>
</Box>
  )
}

export default Step5