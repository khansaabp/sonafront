import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Grid, TextField } from "@mui/material";
import "../Nav.css";
import axios from "axios";

export const NavBar = () => {
  const handlelogout=async()=>{
    const result=await axios.get("http://localhost:4060/logout")
    return result
  }
 
  return (
    <React.Fragment>
      <Grid className="largenav" container spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            style={{ backgroundColor: "black", color: "white" }}
            position="absolute"
          >
            <Toolbar>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      style={{ color: "white" }}
                      {...bindTrigger(popupState)}
                    >
                      <MenuIcon />
                      Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>
                        <Link style={{ textDecoration: "none" }} to="/">
                          Home
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/customers"
                        >
                          Customers
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>
                        <Link style={{ textDecoration: "none" }} to="/addcust">
                          Addcustomer
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/addproduct"
                        >
                          AddProduct
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>
                        {" "}
                        <Link style={{ textDecoration: "none" }} to="/login">
                          Login
                        </Link>
                      </MenuItem>
                      {/* <MenuItem onClick={popupState.close} onClick={}>Logout</MenuItem> */}
                      <MenuItem  onClick={handlelogout}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>

              <Grid className="home" item xs={2}>
                <Link
                  to="/"
                  style={{
                    // paddingLeft: "20px",
                    marginLeft: "20px",
                    fontSize: "18px",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  Home
                </Link>
              </Grid>

              <Grid className="home" item xs={2}>
                <Link
                  to="/customers"
                  style={{
                    // paddingLeft: "20px",
                    marginLeft: "20px",
                    fontSize: "18px",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  Customers
                </Link>
              </Grid>
              <Grid className="home" item xs={2}>
                <Link
                  to="/addproduct"
                  style={{
                    // paddingLeft: "20px",
                    marginLeft: "20px",
                    fontSize: "18px",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  AddProducts
                </Link>
              </Grid>
              <Grid className="home" item xs={2}>
                <Link
                  to="/dashboard"
                  style={{
                    // paddingLeft: "20px",
                    marginLeft: "20px",
                    fontSize: "18px",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {" "}
                  Dashboard
                </Link>
              </Grid>
              {/* <Grid item xs={2}></Grid> */}

              <Grid className="home" item xs={2}>
                <Button style={{ color: "white" }}>Login</Button>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      <Grid className="smallnav" container spacing={1}>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              style={{ backgroundColor: "black", color: "white" }}
              position="absolute"
            >
              <Toolbar>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button
                        style={{ color: "white" }}
                        {...bindTrigger(popupState)}
                      >
                        <MenuIcon />
                        Menu
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                          <Link style={{ textDecoration: "none" }} to="/">
                            Home
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/customers"
                          >
                            Customers
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/addcust"
                          >
                            Addcustomer
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/addproduct"
                          >
                            AddProduct
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          My account
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
                {/* <Button style={{ color: "white", paddingLeft: "180px" }}> */}
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ width: "82%", bgcolor: "white" }}
                />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "190px",
                  }}
                  to="/login"
                >
                  login
                </Link>
                {/* </Button> */}
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
