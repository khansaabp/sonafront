import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { json } from "react-router-dom";
import Cookies from "universal-cookie";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [dataa, setData] = useState([]);
  const [role,setRole]=useState("")
  /*beforre then there is .then((res)=>{
    res.json().*/
    const cookies = new Cookies(null, { path: '/' })
  const handleLogin = async () => {
    setEmail(email);
    setPass(password);

    let payload = { email, password };
    const result = await axios
      .post("http://localhost:4060/login", payload)
      .then((result) => {
        console.log(`.then console resu${result.data.userMail.role}`)
        // const dat=result.data.userMail.email
        console.log(`cookie${cookies}`)
       cookies.set(
          "login",
         result.data.userMail.tokens[0].token,{
          expiresIn:10,
         },
          console.log(`this is token from localstro.then${result.data.userMail.tokens[0].token}`),
       
          // json.stringify({
          //   login: true,
          //   token: result.data.userMail.tokens[0],
          // })
        );
        cookies.set(
          "role",
          result.data.userMail.role,{
           
          }
        )
        setRole(result.data.userMail.role)
        console.log(`role of user${result.data.userMail.role}`)
      });
    
    if (cookies.get("login")) {
      console.log("login successful");
      // window.location.href = "/addcom";
    } else {
      alert("login fail");
    }
    // console.log(`this is result.token:${result.data.token}`);
    // setData(result.data);
    // console.log(result.data.userMail);
    setEmail("");
    setPass("");
    
  };

  const handleLogout=()=>{
    cookies.remove("login")
    window.location.href="/"
  }
  return (
    <React.Fragment>
      <h1>login page</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            value={email}
            label="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            value={password}
            label="password"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Button variant="coantained" onClick={handleLogin}>
            login
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="coantained" onClick={handleLogout}>
            logout
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
