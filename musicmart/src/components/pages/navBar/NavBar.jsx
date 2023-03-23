import React, { useState } from 'react';
import axios from "axios";

const NavBar = () => {

  const [playlists, setPlaylists] = useState([]);

  const getPlaylists = async (accessToken) => {
    try {
        const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: {
          
            'Authorization': `Bearer ${accessToken}`,
          }
        });
        setPlaylists(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }


  const handleYourLibraryClick = () => {
    const accessToken = localStorage.getItem("accessToken");

    getPlaylists(accessToken);
  }

  
  return (
    
    <div className="navBar">
        <div className="logo">
            <h1>musicmart.</h1>
        </div>
        <ul>
            <li className="active">Home</li>
            <li>Search</li>
            <li onClick={ handleYourLibraryClick }>Your Library</li>
        </ul>
        <div className="cookies">
            <span>Cookies</span>
            <span>Privacy Policy</span>
        </div>
    </div>
    
  )
}

export default NavBar