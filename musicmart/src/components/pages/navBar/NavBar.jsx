import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";

const NavBar = () => {

   const CLIENT_ID = "c79873699ad94efc81b4216fb1a16ae7";
   const REDIRECT_URI = "http://localhost:3000"
   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
   const RESPONSE_TYPE = "token"

   

  // const client_id = process.env.REACT_CLIENT_ID;
  // const redirect_uri = process.env.REACT_REDIRECT_URI;
  // const auth_endpoint = process.env.REACT_AUTH_ENDPOINT;
  // const response_type = process.env.REACT_RESPONSE_TYPE;
  // const client_secret = process.env.REACT_CLIENT_SECRET;


  // const access_token = process.env.REACR_APP_ACCESS_TOKEN;




  //  const getAccessToken = async (code) => {
  //   const res = await axios.post("https://accounts.spotify.com/api/token", {
  //     grant_type: "authorization_code",
  //     code,
  //     REDIRECT_URI: REDIRECT_URI,
  //     CLIENT_ID: CLIENT_ID,
  //   });

  //   return res.data.access_token;
  //  }

   


// const getAccessToken = async (code) => {
//   const response = await axios.post('https://accounts.spotify.com/api/token', {
//     grant_type: 'authorization_code',
//     code,
//     redirect_uri: reDirectUri,
//     client_id: clientId,
//     client_secret: clientSecret,
//   });

//   return response.data.access_token;
// }


// useEffect(()=>{
//   const hash = window.location.hash
//   let token = window.localStorage.getItem("token")

//   if(!token && hash) {
//     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

//     window.location.hash = ""
//     window.localStorage.setItem("token", token)
//     setToken(token)
//   }
// }, [])



 

  const handleYourLibraryClick = () => {
    
    // setTrack(getTrack);

    
  
  }

  
  return (
    
    <div className="navBar">
        <div className="logo">
            <h1>musicmart.</h1>
        </div>
        <ul>
            <li className="active">Home</li>
            <li>Search</li>
            
            <Link to="/Library"><li onClick={ handleYourLibraryClick }>Your Library</li></Link>
            {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>spotify link
            </a> */}
           
            
        </ul>
        <div className="cookies">
            <span>Cookies</span>
            <span>Privacy Policy</span>
        </div>
    </div>
    
  )
}

export default NavBar