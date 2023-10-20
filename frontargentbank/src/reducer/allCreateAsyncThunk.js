import {  createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk(
    "token/fetchToken", async(userTryToLogin) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userTryToLogin),
      })
      if (response.ok) {
        const userData = await response.json();
        return userData;
      }
      else {
        throw new Error("Echec de la requête fetch");
      }
  
    }
    catch (error){
      throw error;
    }
  });

export const fetchUserProfil = createAsyncThunk(
    "userProfil/fetchUserProfile",
    async ( token, thunkAPI) => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          const userData = await response.json();
          console.log('je suiso le userProfile', userData)
          return userData;
        } else {
          throw new Error(`Échec de la requête fetch : ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        throw error;
      }
    }
  );

// a tester et ameliorer

  
  
  // export const fetchChangeUserName = createAsyncThunk(
    //     "userProfil/fetchUserProfile",
    //     async ( token, data , thunkAPI) => {
    //         try {
    //             const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    //               method: "PUT",
    //               headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //               },
    //               body: JSON.stringify(data)
               
    //             });
    
    //             if (response.ok) {
    //               const userData = await response.json();
    //               console.log("recuperation :", userData);
    //             } else {
        //               console.error("Échec de la requête fetch :", response.status, response.statusText);
        //             }
    //           } catch (error) {
        //             console.error("Erreur lors de la requête fetch :", error);
        //           }
        //         }
        //   );
        
        //////////////////////////////
        // const fetchTestPut= async(token, data) => {
        
        //     try {
        //         const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        //           method: "PUT",
        //           headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${token}`,
        //           },
        //           body: JSON.stringify(data)
               
        //         });
          
        //         if (response.ok) {
        //           const userData = await response.json();
        //           console.log("recuperation :", userData);
        //         } else {
        //           console.error("Échec de la requête fetch :", response.status, response.statusText);
        //         }
        //       } catch (error) {
        //         console.error("Erreur lors de la requête fetch :", error);
        //       }
        //     }
        //     export default fetchTestPut;
