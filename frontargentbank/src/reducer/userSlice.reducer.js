import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async() => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": "tony@stark.com",
        "password": "password123"
      }),
    })
    if (response.ok) {
      const userData = await response.json();
      // console.log(userData);
      // console.log(userData.body);
      return userData;
    }
    else {
      throw new Error("Echec de la requête fetch");
    }

  }
  catch (error){
    throw error;
  }
})


const userSlice = createSlice({
    name: "user",
    initialState: {
       users: [],
       token: null
    },
    reducers: {
      setUserTryToLogin: (state, action) => {
        const { email, password } = action.payload;
        state[email] = { email, password };
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.token =  action.payload.body.token;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    },
  });
  
  export const {setUserTryToLogin} = userSlice.actions;
  export default userSlice.reducer;
  