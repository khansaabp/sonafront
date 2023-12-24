import React,{useState,useEffect} from "react";
import axios from "axios";
import { TextField,Button } from "@mui/material";

export const AddCom=()=>{

 const[email,setData]=useState("")
 const[data,setDat]=useState("")

 const token=localStorage.getItem("login")
 const handleadd=async()=>{
    const payload={email,token}
    const result=await axios.post("http://localhost:4060/addcom",email,{
        headers:token
    })
    console.log(result.config.data.token)
    setDat(result.config.data.token)
 }
    const getData=async()=>{
        if(data){
const result=await axios.get("http://localhost:4060/addcom",data)
console.log(result)
return result
    }}
// useEffect(async()=>{

//  setDat(localStorage.getItem("login"))

// },[])

    return(
        <div>
        <h1 style={{marginTop:"100px"}}>this is login</h1>
        <TextField onChange={(e)=>{setData(e.target.value)}} variant="outlined"/>
        
        <Button variant="contained" onClick={handleadd}>submit</Button>
        </div>
    )
}