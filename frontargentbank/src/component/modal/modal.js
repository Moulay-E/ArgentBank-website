import "./modal.css";

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import fetchTestPut from "../../pages/registration/fetchTest";
import { setUserNameReducer } from "../../reducer/userProfilSlice.reducer";

function Modal() {
    const token = useSelector((state) => state.userToken.token);
    const userProfile = useSelector((state) => state.userProfile.userProfil);
    const [modal, setModal] = useState(false);
    const [useName, setUseName] = useState(userProfile.userName);
    const dispatch = useDispatch();
    
    const toggleModal = () => {
        setModal(!modal);
    }

    const userNameChange = async (e) => {
        e.preventDefault();
        dispatch(setUserNameReducer(useName))
        fetchTestPut(token, {userName: useName});
        setUseName(""); 
        toggleModal();
    }

    return (
        <>
        <button className="btn-edit" onClick={toggleModal}>Edit User Name</button>
        {modal && (
            <div className="modal">
                <div className="modal__background"></div>
                <div className="modal__background__content">
                <button className="close-modal" onClick={toggleModal}> X </button>

                    <h3>Change d'Username</h3>
                    {/* If they don't have any userName */}
                    {
                        userProfile.userName ? 
                            (<p> Your current user name: {userProfile.userName}</p>) 
                            : (<p> No current username</p>)
                        }
                    {/* Add new userName with a form*/}
                    <form onSubmit={userNameChange}>
                        <div className="input-wrapper">
                            <label htmlFor="username">New Username :</label>
                            <input 
                            type="text" 
                            id="username" 
                            value={useName}
                            
                            onChange={(e) => setUseName(e.target.value)}
                            />
                            <label htmlFor="firstName">Nom:</label>
                            <input type="text" id="firstName" value={ userProfile.firstName } readOnly />

                            <label htmlFor="lastName">Nom:</label>
                            <input type="text" id="lastName" value= { userProfile.lastName } readOnly />
                        </div>
                        <button className="sign-in-button" id="connect" type="submit">
                            <span>Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;