import { createSlice } from "@reduxjs/toolkit";
import  {fetchUserProfil} from "./allCreateAsyncThunk";

const userProfilSlice = createSlice({
    name: "userProfil",
    initialState: {
       userProfil: 
        {
        email: "",
       firstName: "",
       lastName: "",
       userName: "",
       },
      loading: false,  
      error: null,
       
    },
    reducers: {
      setUserNameReducer: (state, action) => {
        state.userProfil.userName = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchUserProfil.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfil.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfil.email = action.payload.body.email;
        state.userProfil.firstName = action.payload.body.firstName;
        state.userProfil.lastName = action.payload.body.lastName;
        state.userProfil.userName = action.payload.body.userName;

      })
      .addCase(fetchUserProfil.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    },
  });
  
  export const { setUserNameReducer } = userProfilSlice.actions;
  export default userProfilSlice.reducer;
  
