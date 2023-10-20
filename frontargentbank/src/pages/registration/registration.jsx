import React, {  useRef } from "react";
import "./registration.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fetchToken} from "./../../reducer/allCreateAsyncThunk";

function Registration() {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async(e)=> {
    e.preventDefault();
    const userTryToLogin = {
      // email: form.current[0].value,
      // password:form.current[1].value,
      "email": "tony@stark.com",
      "password": "password123"
    };
    await dispatch(fetchToken(userTryToLogin));
    navigate("/Registration/user");
};

    return(
       <>  
        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={e => handleForm(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
            
          </div>
          <button className="sign-in-button"  type="submit" >
            <span>Sign In</span>
          </button>
        </form>
      </section>
    </main>
       </>
    ) 
}

export default Registration;