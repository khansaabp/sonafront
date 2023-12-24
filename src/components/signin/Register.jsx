import React,{useState,useEffect} from "react";
import { Grid,TextField,Button,Card,CardContent } from "@mui/material";
import axios from "axios";

export const Register=()=>{

   const[name,setFname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPass]=useState("")
    const[api,setApi]=useState([])

    const handleAdd=async()=>{

setFname(name)
setEmail(email)
setPass(password)

let payload={name,email,password}
const result= await axios.post("http://localhost:4060/users",payload)
console.log(result)
setEmail("")
setFname("")
setPass("")
    };
// const getData=async()=>{
// const result=await axios.get("http://localhost:4060/users")
// }

    return(
        <div>
<Grid container spacing={1} sx={{marginTop:"85px"}}>
<Grid item xs={3}>

</Grid>
<Grid item xs={6}>
    <TextField label="name" value={name} onChange={(e)=>setFname(e.target.value)} variant="outlined" fullWidth/>
    <TextField label="email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" fullWidth/>
    <TextField label="password" value={password} onChange={(e)=>setPass(e.target.value)} variant="outlined" fullWidth/>
  
<Button onClick={handleAdd} variant="contained">submit</Button>
</Grid>
<Grid item xs={3}>

</Grid>
</Grid>
        </div>
    )
}