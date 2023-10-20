import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import fetchTestPut from "../../pages/registration/fetchTest";
import { setUserNameReducer } from "../../reducer/userProfilSlice.reducer";
// import { profilUser } from "../redux/profilSlice";

function Modal() {
    const token = useSelector((state) => state.userToken.token);
    const userProfile = useSelector((state) => state.userProfile.userProfil);
    const [modal, setModal] = useState(false);
    const [useName, setUseName] = useState(userProfile.userName);
    const dispatch = useDispatch();

    // const name = {
    //     "userName": "test"
    //   }
    
    const toggleModal = () => {
        setModal(!modal);
        // fetchTestPut(token, name)
    }

    const userNameChange = async (e) => {
        e.preventDefault();
        // try {
        //     const data = await callAPI ("profilePut", token, {userName: useName});
        //     dispatch(profilUser({data}));
        //     // Réinitialiser le champ de saisie
        //     setUseName(""); 
        // } catch (error) {
        //     console.log (error, "Erreur à l'appel d'API pour le changement d'Username");
        // }
        // fetchTestPut(token, useName)

        dispatch(setUserNameReducer(useName))
         fetchTestPut(token, {userName: useName})
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
                    <h3>Change d'Username</h3>
                    {/* If they don't have any userName */}
                    {userProfile.userName ? (<p> Your current user name: {userProfile.userName}</p>) : (<p> No current username</p>)}
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
                        </div>
                        <button className="sign-in-button" id="connect" type="submit">
                            <span>Submit</span>
                        </button>
                    </form>
                    <button className="close-modal" onClick={toggleModal}> X </button>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;