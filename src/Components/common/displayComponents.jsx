import { Typography,TextField,Button } from "@material-ui/core";
export const renderText=({label,color,align,variant})=>(
<Typography
    color={color?color:"primary"}
    align={align?align:"center"}
    variant={variant?variant:"h6"}
>
    {label}
</Typography>
);
export const renderInputText=({label,name,color,type,state,handleOnChange})=>{
    const {data,errors}=state;
    return(
        <TextField 
        id="outlined-basic" 
        label={label}
        color={color?color:"primary"} 
        type={type?type:"string"}
        variant="outlined" 
        fullWidth={true}
        size='small'
        name={name}
        value={data[name]}
        error={errors[name]?true:false}
        helperText={errors[name]}
        onChange={handleOnChange}

    />
    );
};
export const renderButton=({label,color,variant,type,disabled,handleOnClick})=>(
    <Button 
        variant={variant?variant:"outlined"}
        disabled={disabled?true:false}
        color={color?color:"primary"}
        type={type?type:"button"}
        // size="small" 
        onClick={handleOnClick}
    >
    {label}
    </Button>
);