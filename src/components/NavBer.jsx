import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const pages = ["Home", "Products", "Customers", "About Us", "Contact Us"];
const settings = ["Register", "Login", "Dashboard", "Logout"];
const page = ["/", "/addproduct", "/addcust"];

export function NavBer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const cookies = new Cookies(null, { path: '/' })
  const handlelogout=()=>{
  cookies.remove("login")
  window.location.href="/"
console.log("logout successful")
  }
  // const handlelogout=()=>{
  //   localStorage.removeItem("login")
  //   window.location.href="/"
  // }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    if(!cookies.get("login")){
return alert("no login")
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            New Sona Enterprises
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))} */}
                 <MenuItem key={0} onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Typography textAlign="center">Home</Typography>
                  </Link>
                </MenuItem>
                 <MenuItem key={1} onClick={handleCloseNavMenu}>
                  <Link to="/Products">
                    <Typography textAlign="center">Products</Typography>
                  </Link>
                </MenuItem>
                 <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Link to="/Customers">
                    <Typography textAlign="center">Customers</Typography>
                  </Link>
                </MenuItem>
                 <MenuItem key={3} onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Typography textAlign="center">About Us</Typography>
                  </Link>
                </MenuItem>
                 <MenuItem key={4} onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Typography textAlign="center">Contact Us</Typography>
                  </Link>
                </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h9"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            New Sona Enterprises
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Link sx={{ textDecoration: "none" }} to={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))} */}
                 <Link sx={{ textDecoration: "none" }} to="/">
                <Button
                  key={0}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
              </Link>
                 <Link sx={{ textDecoration: "none" }} to="/Products">
                <Button
                  key={1}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Products
                </Button>
              </Link>
                 <Link sx={{ textDecoration: "none" }} to="/Customers">
                <Button
                  key={2}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Customers
                </Button>
              </Link>
                 <Link  sx={{ textDecoration:"none" }} to="/">
                <Button
                  key={3}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block",textDecoration:"none" }}
                >
                  About Us
                </Button>
              </Link>
                 <Link sx={{ textDecoration: "none" }} to="/">
                <Button
                  key={4}
                  onClick={handlelogout}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  logout
                </Button>
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="sona" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
