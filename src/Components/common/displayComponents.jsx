import { Typography,TextField,Button, makeStyles } from "@material-ui/core";

const styles =makeStyles({
    textfield:{
        "& label.Mui-focused": {
            color: "#00b5b7"
          },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
            borderColor: "#00b5b7"
        }
      }
    },
    button: {
        backgroundColor: '#fff9f4',
        border:'1px solid #ff8914',
        color: '#ff8914',
        fontWeight:'bold',
        '&:hover': {
          backgroundColor: '#ff8914',
          color: '#fff',
      },
    }
});

export const renderText=({label,align,variant})=>(
<Typography
    align={align?align:"center"}
    variant={variant?variant:"h6"}
>
    {label}
</Typography>
);
export const renderInputText=({required,label,color,name,type,data,errors,handleOnChange})=>{
    
    // const {data,errors}=state;
    const classes=styles();
    return(
        <TextField 
        required={required?true:false}
        className={classes.textfield}
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
export const renderButton=({label,variant,type,disabled,handleOnClick})=>{
    const classes=styles();
    return(
    <Button 
        variant={variant?variant:"outlined"}
        className={classes.button}
        disabled={disabled?true:false}
        // color={color?color:"primary"}
        type={type?type:"button"}
        // size="small" 
        onClick={handleOnClick}
    >
    {label}
    </Button>
    )
};