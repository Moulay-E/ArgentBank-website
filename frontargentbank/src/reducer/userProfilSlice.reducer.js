import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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
      loading: false,  // Ajouté
      error: null,
       
    },
    reducers: {
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchUserProfil.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfil.fulfilled, (state, action) => {
        state.loading = false;
        // state.userProfil = action.payload.body;
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
  
  export default userProfilSlice.reducer;
  
