import React, { useEffect, useRef } from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setUserTryToLogin } from "../../reducer/userSlice.reducer";
import fetchTest from "./fetchTest";

function Registration() {
  const form = useRef();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userSliceReducer);
 const token =  useSelector((state) => state.userSliceReducer.token);

  useEffect(() => {
    if (userData) {
      console.log("Données de l'utilisateur :", userData);
    }
  }, [userData]);


  const handleForm = async(e)=> {
    e.preventDefault();
    // console.log(form.current[0].value);
    // console.log(form.current[1].value);
    // console.log("mon token", token);
    const userTryToLogin = {
      email: form.current[0].value,
      password:form.current[1].value,
    };
    dispatch(setUserTryToLogin(userTryToLogin))
     
    // fetchTest();
    dispatch(fetchUser());
    
  }

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
          {/* <Link to="./user" className="sign-in-button"> */}
          <button className="sign-in-button"  type="submit" >
            <span>Sign In</span>
          </button>
          {/* </Link> */}
        </form>
      </section>
    </main>

       </>
    ) 
}

export default Registration;