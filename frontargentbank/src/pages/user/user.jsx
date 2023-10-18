import React, { useEffect } from "react";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfil } from "../../reducer/userProfilSlice.reducer";

function User() {
  const token = useSelector((state) => state.userToken.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfil = useSelector((state)=> state.userProfile.userProfil);
  
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfil(token));
    }
    else {
      navigate("/");
    }
  }, [token, navigate, dispatch]);
  
    return(
        <main className="main bg-dark">
        {userProfil ? (
            <div className="header">
            <h1>Welcome back<br />{userProfil.firstName} {userProfil.lastName} !</h1>
            </div>
        ) : (
            <div className="header">
            <h1>Welcome back!</h1>
            <button className="edit-button">Edit Name</button>
            </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    )
}

export default User;
