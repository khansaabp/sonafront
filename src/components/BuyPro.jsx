
import React,{useState,useEffect} from "react";
import axios from "axios";

export const BuyPro=({idd})=>{

    const [data,setData]=useState([])
    const[newid,setNewid]=useState("")

    const getData=async()=>{
        setNewid(idd)
const result=await axios.get(`https://sonabackend.onrender.com/productdetails/${newid}`)
console.log(result.data.products)
setData(result.data.products)
    }
    useEffect(()=>{
getData()
    },[])
    return(
        <div style={{backgroundColor:"white"}}>
            <h1>byu</h1>
            {
                <h1>{idd}</h1>
            }
            {
                console.log(idd)
            }
            {data.map((item)=>
            item
            )}
        </div>
    )
}