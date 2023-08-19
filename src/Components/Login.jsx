import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { host } from "../api";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
// import { login } from "./common/FormData";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  // const [user, setUser] = useRecoilState(login);

  
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const styles = makeStyles({
    textfield: {
      "& label.Mui-focused": {
        color: "#00b5b7",
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#00b5b7",
        },
      },
    },
    button: {
      backgroundColor: "#ff8914 !important ",
      border: "1px solid #ff8914 !important",
      color: "#fff !important",
      fontWeight: "bold !important",
      "&:hover": {
        backgroundColor: "#fff9f4 !important",
        color: "#ff8914 !important",
      },
    },
  });

  const setErrorsToNull = () => {
    setErrors({ email: "", password: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if(signin===true){
    setErrorsToNull();
    console.log(errors);
    const data = new FormData(event.currentTarget);
    const userToCheck = {
      emailId: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(host + "/login", userToCheck);
      console.log(response.data);
      const authToken = response.data.token;
    // Store the authentication token in session storage
    sessionStorage.setItem('authToken', authToken);
      // setUser({ emailId: data.get("email"), password: data.get("password") });
      navigate("/");
    } catch (error) {
      // console.log(error);
      console.log(errors);
      if (error.response.data === "No such employee exists") {
        setErrors((prevState) => {
          return { ...prevState, email: "No such user exists" };
        });
      } else {
        setErrors((prevState) => {
          return { ...prevState, password: "Enter correct password" };
        });
      }
    }
    
  };

  
  const classes = styles();
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
      
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            className={classes.textfield}
            type="email"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={errors["email"] ? true : false}
            helperText={errors["email"]}
            
          />
          <TextField
            className={classes.textfield}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={errors["password"] ? true : false}
            helperText={errors["password"]}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            className={classes.button}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
         
            Sign In
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}
