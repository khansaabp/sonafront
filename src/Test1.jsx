import React,{useEffect, useState} from "react"
import { TextField,Button } from "@mui/material"

export const Test1=()=>{
const [text,setText]=useState([])
    const [data,setData]=useState([])
    const [nex,setNex]=useState([])
    const [seco,setSeco]=useState(0)

    let date=new Date()
  let sec=date.getSeconds()
  
    setTimeout(()=>{
        setSeco(sec)
    },1000)

    const handleAdd=()=>{
   
        setData([...data,text])
        setNex([...nex,text])
    }
    let x=nex.join("").split(" ")
    // console.log(nex)
    console.log(x)
    return(
        <React.Fragment>
<TextField variant="outlined" onChange={(e)=>setText(e.target.value)}/>
<Button variant="contained" onClick={handleAdd}>submit</Button>
{
    x.map(item=>
        
   item[0]
    
    )
}

{seco}

        </React.Fragment>
    )
}