import { createSlice } from "@reduxjs/toolkit";
import  {fetchToken} from "./allCreateAsyncThunk";


const userTokenSlice = createSlice({
    name: "token",
    initialState: {
      token: null,
      loading: false,
      error: null
       
    },
    reducers: {
      logout : (state)=>{
        state.token = null;
        state.error = null;
        localStorage.removeItem('token');
      },
      addError: (state, action) => {
        state.error = action.payload;
      },
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
        localStorage.setItem('token', state.token);
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    },
  });
  
  export const { logout, addError } = userTokenSlice.actions;
  export default userTokenSlice.reducer;
  