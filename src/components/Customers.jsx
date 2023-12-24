import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Card, CardContent,Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { CustEdi } from "./CustEdi";
import axios from "axios";
import Cookies from "universal-cookie";

export const Customers = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [add, setAdd] = useState([]);
  const [api, setApi] = useState([{}]);
  const [orig, setOrig] = useState([]);
  const [search, setSearch] = useState("");
  const [filtdata, setFiltdata] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [prod, setProd] = useState("");
  const [amnt, setAmnt] = useState();
  const [bal, setBal] = useState();
  const [totbal, setTotbal] = useState([]);
  const [searchprod, setSearchprod] = useState("");
  const [sechpro, setSechpro] = useState(false);
  const [newedi, setNewedi] = useState(name);
  const [newebal, setNewbal] = useState(bal);
  const [editt, setEditt] = useState(false);
  const [time, setTime] = useState("");
  const [previ, setPrevi] = useState([bal]);
  const cookies = new Cookies(null, { path: '/' })
 
  const getTime = () => {
    let date = new Date();
    const hrs = date.getHours();
    console.log(`this is hours${hrs}`);
    const min = date.getMinutes();
    console.log(`this is minutes${min}`);
    const day = date.getDate();
    console.log(`this is day${day}`);
    const ye = date.getFullYear();
    console.log(`this is year${ye}`);
    const moo = date.getMonth();
    console.log(`this is month${moo}`);
    const fin = `${hrs}hrs:${min}min-${day}:${moo + 1}:${ye}`;
    console.log(`this is complte date${fin}`);
    setTime(fin);
    return fin;
  };

  // console.log(hrs,day)
  //    const getTotalBal=()=>{
  //     let filtbal=orig.map(item=>item.bal)
  //     console.log(filtbal)
  //     setTotbal(filtbal.reduce((acc,cur)=>acc+cur))
  //    }
  const handleAdd = async () => {
    let payload = { name, address, phone, prod, amnt, bal, time };
    const result = await axios.post(
      "https://sonabackend.onrender.com/customers",
      // "http://localhost:4060/customers",
      payload
    );

    setAdd([{ ...add, name, address, phone, prod, amnt, bal, time, previ }]);
    setName("");
    setAddress("");
    setPhone("");
    setProd("");
    setAmnt("");
    setBal("");
    setPrevi([bal]);
    setRefresh(refresh + 1);
  };
  const getData = async () => {
    const result = await axios.get(
      "https://sonabackend.onrender.com/customers"
    );
    setApi(result.data);
    setOrig(result.data);
    console.log(previ);
  };

  const handleDelete = async (_id) => {
    const payload = { _id };

    await axios.post(
      "https://sonabackend.onrender.com/customerdelete",
      payload
    );
    setRefresh(refresh - 1);
  };
 
  const handleEdit = (index) => {
    setNewedi(name);
    setNewbal(bal);
    setPrevi([previ]);
    setEditt(true);
    setRefresh(refresh + 1);
  };
  
  useEffect(() => {
    setNewedi(name);
    setNewbal(bal);
    getTime();
  }, [name, bal]);
  
  const handleSave = async (_id) => {
    setPrevi(bal, time);
    console.log(`this is id.bal${bal}`);
    setPrevi([_id.previ], bal, time);
    console.log(`this is previ:${_id.previ}`);
    const payload = { _id, newebal, previ, bal, time };
    console.log(payload);
    await axios.put("https://sonabackend.onrender.com/customeredit", payload);
    setRefresh(refresh - 1);
    setEditt(false);
    setName("");
    setBal("");
  };
  const handleProd = () => {
    setSechpro(true);
  };
  const handleSearchpro = () => {
    setSechpro(false);
  };
  useEffect(() => {
    const filt = orig.filter((item) =>
      item.name.toUpperCase().includes(search.toUpperCase())
    );
    setFiltdata(filt);
    setApi(filt);
  }, [search]);
  useEffect(() => {
    const filt = orig.filter((item) =>
      item.prod.toUpperCase().includes(searchprod.toUpperCase())
    );
    setFiltdata(filt);
    setApi(filt);
  }, [searchprod]);

  useEffect(() => {
    if(cookies.get("login"))
    {getData()}else{
      
     
      console.log("not log in")
      
    
      // return()=>clearTimeout(timeOut)
      return window.location.href="/"

    }

    // getTotalBal()
  }, []);
  useEffect(() => {
    getData();
    // getTotalBal()
  }, [refresh]);
  return (

    <React.Fragment>
      <br />
      <br />
      <Grid container spacing={2}>
        {sechpro == false ? (
          <Grid item xs={8}>
            <TextField
              label="search by name"
              onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
              style={{ backgroundColor: "white" }}
              fullWidth
            />
          </Grid>
        ) : (
          <Grid item xs={8}>
            <TextField
              label="search by product"
              onChange={(e) => setSearchprod(e.target.value)}
              variant="outlined"
              style={{ backgroundColor: "white" }}
              fullWidth
            />
          </Grid>
        )}
        <Grid item xs={2}>
          <Button
            onClick={handleSearchpro}
            style={{
              color: "black",
              height: "55px",
              backgroundColor: "lightgoldenrodyellow",
            }}
            fullWidth
          >
            search by customer
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={handleProd}
            style={{
              color: "black",
              height: "55px",
              backgroundColor: "lightgoldenrodyellow",
            }}
            fullWidth
          >
            search by item
          </Button>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            style={{ backgroundColor: "white" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            variant="outlined"
            style={{ backgroundColor: "white" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            style={{ backgroundColor: "white" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="prod"
            value={prod}
            onChange={(e) => setProd(e.target.value)}
            variant="outlined"
            style={{ backgroundColor: "white" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="amnt"
            value={amnt}
            onChange={(e) => setAmnt(e.target.value)}
            variant="outlined"
            style={{ backgroundColor: "white" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="bal"
            value={bal}
            onChange={(e) => setBal(e.target.value)}
            variant="outlined"
            style={{ backgroundColor: "white" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
          <Button
            style={{ height: "55px" }}
            onClick={handleAdd}
            variant="contained"
            fullWidth
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={6}>
          Total balance: {totbal}
        </Grid>
        <Grid item xs={6}>
          Total balance: {totbal}
        </Grid>
        {/* <Grid item xs={6}><Button variant="contained" onClick={getTotalBal}>calculate</Button></Grid> */}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {api.map((item, index) => {
            return (
              <>
                <br />

                <Card style={{ backgroundColor: "lightgray" }}>
                  <CardContent>
                    <Link to={index}>
                      {index + 1}: Name:{item.name} <br />
                      Address:{item.address} <br />
                      Phone:{item.phone} <br />
                      Prod:{item.prod} <br />
                      Amnt:{item.amnt} <br />
                      Bal:{item.bal} <br />
                      previ:{item.previ} <br />
                      Time:{item.time} <br />
                    </Link>
                    {/* prive:{item.previ} <br /> */}
                    { cookies.get("role")=="admin"?<div>
                  <Button
                      variant="contained"
                      onClick={() => handleDelete(item._id)}
                    >
                      delete
                    </Button>
                   
                    {editt == true ? (
                      
                      <Button
                        variant="contained"
                        onClick={() => handleSave(item._id)}
                      >
                        save
                      </Button>
                    ) : (
                      
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(item._id)}
                      >
                        edit
                      </Button>
                    )}
                    </div>:<Alert severity="error">no login alert!</Alert>}
                  </CardContent>
                </Card>
              </>
            );
          })}
        </Grid>
        <Grid item xs={4}>
          {add.map((elem, index) => {
            return (
              <>
                {index + 1}
                <Card>
                  <Grid item xs={3}>
                    <CardContent>Name:{elem.name}</CardContent>
                  </Grid>
                  <Grid item xs={4}>
                    <CardContent>Address:{elem.address}</CardContent>
                  </Grid>
                  <Grid item xs={4}>
                    <CardContent>Phone:{elem.phone}</CardContent>
                    <CardContent>Prod:{elem.prod}</CardContent>
                    <CardContent>Amnt:{elem.amnt}</CardContent>
                    <CardContent>
                      Bal:{elem.bal}
                      <br />
                      previ:{elem.previ}
                      <br />
                      Time:{elem.time}
                      {/* previ:{elem.previ} */}
                    </CardContent>
                  </Grid>
                </Card>
              </>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
