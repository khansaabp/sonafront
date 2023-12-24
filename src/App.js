import React from "react";
import { Landing } from "./components/Landing";
import { Grid } from "@mui/material";
// import "./App.css"

// import { Test1 } from "./Test1";

function App() {
  return (
<div style={{backgroundColor:"#708090"}}>
  {/* <Grid container spacing={1}> */}
  {/* <Grid item xs={12}>
{/* <Typography style={{marginLeft:"250px",color:"black"}} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            New Sona 
          </Typography> */}
          {/* <h4 style={{textAlign:"center",fontSize:"20px",textDecoration:"none",color:"black"}}> New Sona </h4> */}
{/* </Grid> */} 
    {/* <Grid item xs={12}> */}
    <Landing/>
    {/* </Grid> */}
  {/* </Grid> */}

{/* <Test1/> */}
</div>
  );
}

export default App;
