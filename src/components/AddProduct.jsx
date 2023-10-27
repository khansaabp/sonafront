import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent,Button, TextField } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";
import { BuyPro } from "./BuyPro";
export const AddProduct=()=>{

const [title,setTitle]=useState("")
const [category,setCategory]=useState("")
const [price,setPrice]=useState("")
const [stock,setStock]=useState("")
const [image,setImage]=useState("")
const [data,setData]=useState([])
const [oridata,setOridata]=useState([])
const [refresh,setRefresh]=useState(0)
const [detail,setDetail]=useState([])
const [newtit,setNewtit]=useState("")
const [newCat,setNewcat]=useState("")
const [newPri,setNewpri]=useState(0)
const [newStk,setNewstk]=useState(0)
const [newImg,setNewimg]=useState("")
const [show,setShow]=useState([])
const [idd,setIdd]=useState("")

const handleAdd=async()=>{
let payload={title,category,price,stock,image}
const result=await axios.post("https://sonabackend.onrender.com/addproduct",payload)

setTitle("")
setCategory("")
setPrice("")
setStock("")
setImage("")
setRefresh(refresh-1)
}

const getData=async()=>{
    const result =await axios.get("https://sonabackend.onrender.com/products")
    setData(result.data)
    // console.log(result.data)
    setOridata(result.data)
}
const handleDelete=async(_id)=>{
const payload={_id}
await axios.post("https://sonabackend.onrender.com/productdelete",payload)
setRefresh(refresh+1)
}
const handleProductDetail=async(_id)=>{
    
const result=await axios.get(`https://sonabackend.onrender.com/productdetails/${_id}`)
    console.log(result.data.products)
    const payload=[{}]
    // setShow([{...result.data.products}])
    setNewtit(result.data.products.title)
    setNewcat(result.data.products.category)
    setNewpri(result.data.products.price)
    setNewstk(result.data.products.stock)
    setNewimg(result.data.products.image)
    setShow([{title:newtit,category:newCat,price:newPri,stock:newStk,image:newImg}])
    setIdd(_id)
    // console.log(show)
    console.log(`this is show${show.title}`)
    
    // setNewtit("")
    // setNewcat("")
    // setNewpri(0)
    // setNewstk(0)
    // setNewimg("")
    // setShow([])
setRefresh(refresh+1)

}

useEffect(()=>{
getData()
},[])
useEffect(()=>{
    getData()
    },[refresh])

    return(

        <React.Fragment>
            <h1 style={{color:"white"}}>Add Products</h1>
            <Grid container spacing={2} sx={{marginRight:"2px"}}>
                <Grid item xs={3}>
<TextField variant="outlined" label="title" onChange={(e)=>setTitle(e.target.value)} style={{backgroundColor:"white"}} fullWidth/>
                </Grid>
                <Grid item xs={3}>
<TextField variant="outlined" label="category" onChange={(e)=>setCategory(e.target.value)} style={{backgroundColor:"white"}} fullWidth/>
                </Grid>
                <Grid item xs={3}>
<TextField variant="outlined" label="price" type="number" onChange={(e)=>setPrice(e.target.value)} style={{backgroundColor:"white"}} fullWidth/>
                </Grid>
                <Grid item xs={3}>
<TextField variant="outlined" label="stock" type="number" onChange={(e)=>setStock(e.target.value)} style={{backgroundColor:"white"}} fullWidth/>
                </Grid>
                <Grid item xs={3}><TextField variant="outlined" label="image" type="text" onChange={(e)=>setImage(e.target.value)} style={{backgroundColor:"white"}} fullWidth/></Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={3}><Button variant="contained" onClick={handleAdd}  fullWidth>submit </Button></Grid>
           
            <Grid item xs={8} sx={{margin:"5px"}}>
<Card>
    {data.map((item,index)=>{
        // const imgee=item.image
return(
  <Grid container spacing={2} sx={{margin:"5px"}}>
    <CardContent>
        <Grid item xs={12} >
        <Link to={"/addcust"}>
            {index+1} <br />
        {item.title} <br />
        {item.category} <br />
        {item.price} <br />
        {item.stock} <br />
        {<img style={{width:"100px",height:"60px"}} src={item.image}/>}
       
        </Link>
        <br />
        <Button variant="contained" onClick={()=>handleDelete(item._id)} >delete</Button>
      <Button variant="contained" onClick={()=>handleProductDetail(item._id)} >  Product detail</Button>
        </Grid>
    </CardContent> 
    </Grid>
)
    }
    
    )}
</Card>
            </Grid>
            <Grid sx={{margin:"5px",bgcolor:"white"}} item xs={3}>
        
            <ProductDetails idd={idd} show={show} newtit={newtit}  newCat={newCat} newImg={newImg} newPri={newPri} newStk={newStk}/>

            </Grid>
            </Grid>
            <BuyPro idd={idd}/>
        </React.Fragment>
    )
}