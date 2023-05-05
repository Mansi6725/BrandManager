import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@material-ui/core";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { login } from "./common/FormData";

export default function Header() {
  const [user, setUser] = useRecoilState(login);
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      primary: {
        // main: "#FFA500", // custom background color
        main: "#ffaf87",
      },
    },
  });

  const handleLogOnClick = () => {
    if (user.emailId) {
      setUser({ emailId: "", password: "" });
      navigate("/login");
    }
  };
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          flexGrow: 1,
          
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flexGrow: 1 }}>
          {/* <span><img src="./assets/hk.png" alt="Logo" /></span> */}
            <span><Typography variant="h6" component="div">
              Brand Manager
            </Typography></span>
          </div>
          <div>
            {user.emailId ? (
              <Button
                component={Link}
                to={{ pathname: "/newbrand" }}
                sx={{
                  "& .MuiButtonBase-root .MuiButton-root .MuiButton-text .MuiButton-label": {
                    color: "#858585 !important", //css ni lg ra
                  },
                }}
              >
                New Brand
              </Button>
            ) : (
              <div></div>
            )}

            <Button
              onClick={handleLogOnClick}
              sx={{
                "& .MuiButton-label": {
                  color: "#858585 !important", //css ni lg ra
                },
              }}
            >
              {user.emailId ? "Logout" : "Login"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    // </Box>
  );
}
