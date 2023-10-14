import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import img from "./../../asset/img/argentBankLogo.png"


function Banner(){

return(
     
  <nav className="main-nav">
    <Link to= "/">
      <img
        src={img}
        alt= "Argent Bank Logo"
        className="main-nav-logo-image"
      />
    </Link>
      <h1 className="sr-only">Argent Bank</h1>
    <div>
    <Link to= "/Registration" className="main-nav-item">
        <i className="fa fa-user-circle"></i> 
        <span> Sign In</span>
    </Link>
    </div>
  </nav> 
)
}

export default Banner;
