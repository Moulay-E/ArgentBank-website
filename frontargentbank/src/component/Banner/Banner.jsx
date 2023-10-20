import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import img from "./../../asset/img/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux";
import {logout} from "./../../reducer/userTokenSlice.reducer";
import { isEmpty } from "../../utils/utils";


function Banner(){
  const dispatch = useDispatch();
  // const token = useSelector((state)=>  state.userToken.token);
  const userName = useSelector((state)=>  state.userProfile.userProfil.firstName)
  const token = useSelector((state) => state.userToken.token) || localStorage.getItem('token');

// const token = !isEmpty(useSelector((state) => state.userToken.token)) ? localStorage.getItem('token') : false;

  const hangleLogout = () => {
    console.log("deco")
    // console.log(tes);
    dispatch(logout())
  }


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
    { !isEmpty(token) ? (
      <Link onClick={hangleLogout} to= "/" className="main-nav-item">
        <i className="fa fa-user-circle"></i> 
        <span> {userName} </span><br/>
        <span> Sign Out</span>
    </Link>
    )
    :(
      <Link to= "/Registration" className="main-nav-item">
        <i className="fa fa-user-circle"></i> 
        <span> Sign In</span>
    </Link>
    )
    }
    </div>
  </nav> 
)
}

export default Banner;
