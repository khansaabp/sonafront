import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Label } from "recharts";
export const NavBarr = () => {
  return (
    <React.Fragment>
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
                      <Link style={{ textDecoration: "none" }} to="/customers">
                        Customers
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link style={{ textDecoration: "none" }} to="/addcust">
                        Addcustomer
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      <Link style={{ textDecoration: "none" }} to="/addproduct">
                        AddProduct
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                      {" "}
                      <Link style={{ textDecoration: "none" }} to="/login">
                        Login
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <TextField
              variant="filled"
              label="search"
              size="small"
              // label={'margin="none"'} id="margin-none" 
              sx={{
                alignContent: "center",
                bgcolor: "white",
                marginLeft: "25%",
                width: "45pc",
                height: "35px",
                borderRadius: "10px",
                borderCollapse: "collapse",
                borderBlockColor:"#9999"
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
