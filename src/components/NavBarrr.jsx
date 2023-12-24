import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Grid, TextField, Stack } from "@mui/material";
// import "../Nav.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
// import { DisabledByDefault } from "@mui/icons-material";
import "../Nav.css"
import Carousel from "react-material-ui-carousel";

export function NavBarrr() {

  return (
    <React.Fragment>
      <header>
      <Grid container spacing={1} sx={{position:"fixed",top:"0px"}}>
        <Grid item xs={12} >
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              flexGrow: "1",
              backgroundColor: "black",
              marginTop: "5px",
              height: "15vm",
              position: "sticky",
             
              zIndex:"9999"
             
            }}
            fullwidth
          >
            <AppBar
              style={{ backgroundColor: "black", color: "white" }}
              position="fixed"
            >
              <Toolbar>
                {/* <Grid item xs={3} lg={2} align="left"> */}
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      
                      <Button
                        sx={{bgcolor:"black",color:"white"}}
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
                          {" "}
                          <Link style={{ textDecoration: "none" }} to="/signin">
                            Login
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          {" "}
                          <Link style={{ textDecoration: "none" }} to="/signup">
                            register
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
                {/* </Grid> */}
                <Link style={{ textDecoration: "none", marginLeft:"60%"}} to="/signin">
                <Button className="b12" variant="contained" sx={{ bgcolor: "black",color:"white" }}>
                  login
                </Button>
                          </Link>
               
              </Toolbar>
              <Grid container spacing={1} sx={{marginLeft:"5px", marginTop: "1px",position:"fixed" }}>
         <Grid item xs={3} md={3} lg={3} align="right">
         <Button className="b11" variant="contained" sx={{ bgcolor: "black" }}>
                  home
                </Button>
                </Grid>
                <Grid item xs={3} md={3} lg={3} align="center">
                <Button className="b11" variant="contained" sx={{ bgcolor: "black" }}>
                  home
                </Button>
                </Grid>
                <Grid item xs={3} md={3} lg={3} align="left">
                <Button className="b11" variant="contained" sx={{ bgcolor: "black" }}>
                  home
                </Button>
                </Grid>
                <Grid item xs={3} md={3} lg={3} align="right">
                <Link style={{ textDecoration: "none" }} to="/signin">
                <Button className="b11" variant="contained" sx={{ bgcolor: "black",color:"white" }}>
                  login
                </Button>
                          </Link>
                   
                
                </Grid>
              
        </Grid>
            </AppBar>
          </Box>
        </Grid>
      </Grid>
      </header>
      

      
    </React.Fragment>
  );
}
