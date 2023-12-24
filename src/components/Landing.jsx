import React,{useState} from "react"
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Customers } from "./Customers";
import {  ProductDetails } from "./ProductDetails";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Grid } from "@mui/material";
import { AddProduct } from "./AddProduct";
import { Dashboard } from "./DashBoard";
import { BuyPro } from "./BuyPro";
import { Login } from "./Login";
// import {NavBarr} from "./NavBarr"
import { NavBarrr } from "./NavBarrr";
import { SignInSide } from "./signin/SignInSide";
// import { SignUp } from "./signin/SignUp";
import { NavBer } from "./NavBer";
import { Register } from "./signin/Register";
import { AddCom } from "./AddCom";

export const Landing=()=>{


    return(
        <React.Fragment>
        


       
         
<BrowserRouter >
{/* <NavBarrr/> */}
{/* <NavBar/> */}
{/* <NavBarr/> */}
<NavBer />



<Routes>
    
    <Route path="/Customers" element={<Customers/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/productdetails" element={<ProductDetails/>}></Route>
    <Route path="/Products" element={<AddProduct/>}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
    <Route path="/buypro" element={<BuyPro/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    {/* <Route path="/Login" element={<SignInSide/>}></Route> */}
    {/* <Route path="/Register" element={<SignUp/>}></Route> */}
    <Route path="/Register" element={<Register/>}></Route>
    <Route path="/addcom" element={<AddCom/>}></Route>
    
</Routes>

</BrowserRouter>

        </React.Fragment>
    )
}