import React,{useState,useEffect} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button,Card,CardContent } from "@mui/material";
import axios from "axios";

export const HomeMultiCour=()=>{

    const [data,setData]=useState([])
    const getData=async()=>{
        // const result=await axios.get("https://fakestoreapi.com/products")
        const result =await axios.get("https://sonabackend.onrender.com/products")
setData(result.data)
    }
    useEffect(()=>{
getData()
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    
      
    return(
        <React.Fragment>
<Carousel responsive={responsive}>
    {
data.map(item=>
<div> 
    <Card style={{backgroundColor:"gray",margin:15,padding:1}}>
    <img style={{height:100,width:"100%"}} src={item.image} />
    <CardContent>
        {item.title.slice(0,20)}   
        <br />
        {/* {item.description.slice(0,50)}  */}
        {item.category}
    </CardContent>
    
<Button variant="contained">Buy {item.price} $</Button>
</Card>
</div>
)
}
</Carousel>;
        </React.Fragment>
    )
}