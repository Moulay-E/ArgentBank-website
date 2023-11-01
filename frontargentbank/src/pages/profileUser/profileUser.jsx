
import React, { useEffect } from "react";
import Modal from "../../component/modal/modal";
//redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fetchUserProfil} from "../../reducer/allCreateAsyncThunk";
// utils and generation text
import { isEmpty } from "../../utils/utils";
import { userAccount } from "../../data/userAccount/userAccount";
import  BankAccountFeature from "../../component/bankAccountFeature.js/bankAccountFeature";

function ProfileUser() {
  const token = 
  useSelector((state) => state.userToken.token) ||
   localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfil = useSelector((state)=> state.userProfile.userProfil);
  
  useEffect(() => {
    if (!isEmpty(token)) {
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
            <Modal />
            </div>
        ) : (
            <div className="header">
            <h1>Welcome back!</h1>
            <button className="edit-button">Edit Name</button>
            </div>
        )}

        <h2 className="sr-only">Accounts</h2>
          {
          userAccount.map((element,i) => 
            <BankAccountFeature key={i} user = {element} />
          )
          }
      </main>
    )
}

export default ProfileUser;
