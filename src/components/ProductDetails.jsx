import { Button } from "@mui/material"
import React,{useEffect, useState} from "react"
import { Link } from "react-router-dom"

export const ProductDetails=({show,newtit,newPri,newStk,newImg,newCat,idd})=>{
const [data,setData]=useState([])
// useEffect(()=>{
//     setData([{newtit,newPri,newStk,newImg,newCat}])
// },[show])

    return(
        <React.Fragment>
            <h1 style={{backgroundColor:"green"}}>Addcust</h1>
            {
console.log(`this is add cust newshoe ${show}`)

}
{
console.log(`this is add cust newcat ${newCat}`)

}
{
        console.log(`this is add cust newtit ${newtit}`)
        
       
}

{
        console.log(`this is add cust newpri ${newPri}`)
        
       
}
{
        console.log(`this is add cust newimg ${newImg}`)
        
       
}
{
        console.log(`this is add cust newpri ${newStk}`)
        
       
}
{
    <h3 style={{backgroundColor:"green"}}>ii{newtit}</h3>
   
}
{
    <h3 style={{backgroundColor:"green"}}>hhh{newCat}</h3>
   
}
{
    <h3 style={{backgroundColor:"green"}}>{newPri}</h3>
   
}
{
    <h3 style={{backgroundColor:"green"}}>{newStk}</h3>
   
}
{
  <img src={newImg}/>
   
}
{
  <h2 style={{backgroundColor:"green"}}>this is id:{idd}</h2>
   
}
{/* {
    data.map((item)=>item)
} */}
<Link to={"/productdetails"}>

<Button>buy</Button>
</Link>
        </React.Fragment>
    )
}