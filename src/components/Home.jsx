import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Box } from "@mui/material";
import axios from "axios";
import { HomeMultiCour } from "./HomeMultiCour";
import "../Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

export const Home = () => {
 
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "../IMG-20231024-WA0001.jpg",
      // "https://lh3.googleusercontent.com/p/AF1QipP8NlEpMJoXqFvosdFueWmm_jf3XQjQWkuL2Gin=w1080-h608-p-no-v0",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMyvmFrkM77hM4jOhV-BGeoPMsMTuIxpoEIiQS0=w960-h960-n-o-v1",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPqQuESzLtuIKy60evluVkix6hYE2lGl4oJ21W1=w960-h960-n-o-v1",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      width: "100%",
      padding: "5px",
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      width: "75%",
      padding: "5px",
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      width: "50%",
      padding: "5px",
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      width: "25%",
      padding: "5px",
    },
  };

//   const [tet, setTet]=useState(false)
//   if(localStorage.getItem("login")){
//       setTet(true)
//   }else{
//       setTet(false)
//   }
// console.log(`tet ${tet}`)
  return (
    <div style={{ marginTop: "3px" }}>
      <div className="imageCont">
        {/* <img src="../IMG-20231024-WA0001.jpg"/> */}
        <Carousel
          align="center"
          responsive={responsive}
          indicators={false}
          sx={{ marginTop: "60px" }}
          fullwidth
        >
          {items.map((item, i) => (
            <img
              src={item.image}
              alt="hi"
              style={{
                display: "flex",
                position: "static",
                width: "100%",
                margin: "5px",
                height: "500px",
                zIndex: "100",
              }}
            />
            // <div style={{backgroundImage:URL("../IMG-20231024-WA0001.jpg"),width:"100%",height:"450px",border:"1px solid green"}}>

            // </div>

            // <iframe src={item.image}>

            // </iframe>
          ))}
        </Carousel>
      </div>
      <Card
        style={{ margin: "6%", backgroundColor: "black", color: "white" }}
        fullwidth
      >
        {" "}
        <CardContent style={{ margin: "10px" }}>
          {" "}
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            debitis nihil perspiciatis excepturi natus, ut consequatur magni
            voluptates sed quam blanditiis ad officiis quibusdam illum, officia
            doloribus repudiandae, repellendus beatae cupiditate porro earum
            omnis? Impedit quia, eveniet error itaque totam libero veritatis
            sapiente mollitia vel est ea consequuntur deserunt ducimus.
          </h3>
        </CardContent>
      </Card>
      <Grid container spacing={1}>
        <Grid item lg={1}></Grid>

        <Grid className="gr1" item xs={12} md={11} lg={5}>
          <Card className="gr1" sx={{ bgcolor: "gray", margin: "auto" }}>
            <CardContent>
              <div className="div1">
                <iframe
                  className="if1"
                  title="vid"
                  src="./1.mp4"
                  allow="autoplay"
                ></iframe>

                {/* <div className="if2"> */}
                <Link to="/productdetails">
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    libero ab nemo provident necessitatibus, corporis quibusdam
                    nulla reiciendis. Soluta, modi.
                  </h3>
                </Link>
                {/* </div>  */}
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid className="gr1" item xs={12} md={11} lg={5}>
          <Card sx={{ bgcolor: "gray", margin: "auto" }}>
            <CardContent>
              <div className="div1">
                <iframe
                  className="if1"
                  title="vid"
                  src="./1.mp4"
                  allow="autoplay"
                ></iframe>

                {/* <div className="if2"> */}
                <Link to="/productdetails">
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    libero ab nemo provident necessitatibus, corporis quibusdam
                    nulla reiciendis. Soluta, modi.
                  </h3>
                </Link>
                {/* </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item lg={1}></Grid> */}
        <Grid item xs={12}>
          {/* <h2 style={{ color: "black" }}>this are products</h2> */}
          <HomeMultiCour />
        </Grid>
        <Grid item xs={12}>
          <h2 style={{ color: "black" }}>this are products</h2>
          <HomeMultiCour />
        </Grid>

        <Grid
          style={{ backgroundColor: "black", color: "white" }}
          xs={4}
          lg={4}
          align="center"
        >
          <h4>phone no</h4>
          <h4>9420817170</h4>
          <h4>9404866766</h4>
          {/* <h4>Email</h4>
          <h4>sonaenterprises747@gmail.com</h4> */}
        </Grid>
        <Grid
          style={{ backgroundColor: "black", color: "white" }}
          xs={4}
          lg={4}
          align="center"
        >
          <h4>Email</h4>
          <h4>sonaenterprises</h4>
          <h4> 747@gmail.com</h4>
        </Grid>
        <Grid
          style={{ backgroundColor: "black", color: "white" }}
          xs={4}
          lg={4}
          align="left"
        >
          <h4>Address</h4>
          <h4>Nagar parishad complex, akola road,Hingoli. 431513.</h4>
        </Grid>
      </Grid>
    </div>
  );
};
