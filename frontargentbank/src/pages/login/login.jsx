import "./login.css";
import React, { useRef, useState } from "react";
//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fetchToken} from "../../reducer/allCreateAsyncThunk";
//utils
import { isEmpty } from "../../utils/utils";

function Login() {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleForm = async(e)=> {
    e.preventDefault();
    const userTryToLogin = {
      // email: form.current[0].value,
      // password:form.current[1].value,
      "email": "tony@stark.com",
      "password": "password123"
    };
    await dispatch(fetchToken(userTryToLogin))
    .then((response)=> {
      const response2 = response.payload?.body.token ;
      if((!isEmpty(response2)) ){
        navigate("/Registration/user");
      }
      else {
        setErrorMessage("Wrong password or email.");
      }
    })
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
        <div className="input-error">
        {errorMessage && <p>{errorMessage}</p>}      
        </div>
      </section>
    </main>
       </>
    ) 
}

export default Login;