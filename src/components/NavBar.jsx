import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Grid } from "@mui/material";
import "../Nav.css"



export const NavBar=()=>{
 
 
    return(
        <React.Fragment>
           <Grid container spacing={2}>

    <Box  sx={{ flexGrow: 1 }}>

      <AppBar style={{backgroundColor:"grey"}} position="absolute">

        <Toolbar>
        <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>

          <Button style={{color:"black"}} {...bindTrigger(popupState)}>
          <MenuIcon/>
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/">Home</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/customers">Customers</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/addcust">Addcustomer</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/addproduct">AddProduct</Link></MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
   
<Grid className="home" item xs={2}>
<Link to="/" style={{marginLeft:"20px",fontSize:"18px",textDecoration:"none",color:"black"}}> Home</Link>
</Grid>
<Grid className="home" item xs={2}>
<Link to="/customers" style={{marginLeft:"20px",fontSize:"18px",textDecoration:"none",color:"black"}}> Customers</Link>
</Grid>
{/* <Grid className="home" item xs={2}><Link to="/addproduct" style={{marginLeft:"20px",fontSize:"18px",textDecoration:"none",color:"black"}}> AddProducts</Link></Grid> */}
{/* <Grid className="home" item xs={2}><Link to="/dashboard" style={{marginLeft:"20px",fontSize:"18px",textDecoration:"none",color:"black"}}> Dashboard</Link></Grid> */}
<Grid item xs={2}></Grid>

<Grid className="home" item xs={2}>
<Button style={{color:"black"}}>Login</Button>
</Grid>
    
        </Toolbar>
      </AppBar>
    </Box>
    </Grid> 
        </React.Fragment>
    )
}