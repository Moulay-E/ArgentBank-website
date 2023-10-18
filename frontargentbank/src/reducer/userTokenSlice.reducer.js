import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchToken = createAsyncThunk("token/fetchToken", async(userTryToLogin) => {
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


const userTokenSlice = createSlice({
    name: "token",
    initialState: {
      token: null,
      loading: false,
      error: null
       
    },

    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.token =  action.payload.body.token;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    },
  });
  
  export default userTokenSlice.reducer;
  