import React,{useState,useEffect} from "react";
import Carousel from 'react-material-ui-carousel'
import { Link } from "react-router-dom";
import { Grid,Card } from "@mui/material";
import axios from "axios";
import { HomeMultiCour } from "./HomeMultiCour";
import "../Home.css"


export const Home=()=>{
   


    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:"https://lh3.googleusercontent.com/p/AF1QipP8NlEpMJoXqFvosdFueWmm_jf3XQjQWkuL2Gin=w1080-h608-p-no-v0"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:"https://lh3.googleusercontent.com/p/AF1QipMyvmFrkM77hM4jOhV-BGeoPMsMTuIxpoEIiQS0=w960-h960-n-o-v1"
        }
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          width:"100%",
          padding:"5px"
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          width:"75%",
          padding:"5px"
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          width:"50%",
          padding:"5px"
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          width:"25%",
          padding:"5px"
        }
      };
    return(
        <React.Fragment fullwidth >
         
            {/* <Link to="/"></Link> */}
            <Carousel align="center" responsive={responsive} indicators={false} fullwidth>
         
         {
             items.map( (item, i) => <img className="image1"  src={item.image} alt="hi" style={{width:"100%",margin:"5px"}} /> )
         }
         
     </Carousel>
            <Grid  container spacing={0} fullwidth>
                <Grid item xs={12}><h1 style={{color:"white"}} align="center">home</h1></Grid>
            {/* <Grid xs={12} align="center" responsive={responsive}>  */}
   
        {/* </Grid> */}
     
        <Grid item style={{marginTop:10,color:"white"}} xs={12} align="center">   
<h2>this are products</h2>
<HomeMultiCour />
<h2>this are products</h2>
<HomeMultiCour />
<h2>this are products</h2>
<HomeMultiCour />
  
        </Grid>
       
<Grid style={{backgroundColor:"grey"}} xs={4} align="right">
<h4>products</h4>
<h4>products</h4>
<h4>products</h4>
<h4>products</h4>
</Grid>
<Grid style={{backgroundColor:"grey"}} xs={4} align="center">
<h4>products</h4>
<h4>products</h4>
<h4>products</h4>
<h4>products</h4>
</Grid>
<Grid style={{backgroundColor:"grey"}} xs={4} align="left">
<h4>products</h4>
<h4>products</h4>
<h4>products</h4>
<h4>products</h4>
</Grid>
</Grid>
        </React.Fragment>
    )
}