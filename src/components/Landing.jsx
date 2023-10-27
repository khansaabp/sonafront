import React from "react"
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Customers } from "./Customers";
import {  ProductDetails } from "./ProductDetails";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Grid } from "@mui/material";
import { AddProduct } from "./AddProduct";
import { Dashboard } from "./DashBoard";
import { BuyPro } from "./BuyPro";


export const Landing=()=>{

    return(
        <React.Fragment>
            <Grid container spacing={1}>



         
<BrowserRouter >

<NavBar/>
<Grid item xs={12}>
<Routes>
    
    <Route path="/customers" element={<Customers/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/productdetails" element={<ProductDetails/>}></Route>
    <Route path="/addproduct" element={<AddProduct/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/buypro" element={<BuyPro/>}></Route>
</Routes>
</Grid>
</BrowserRouter>

</Grid>
        </React.Fragment>
    )
}