import {  createAsyncThunk } from "@reduxjs/toolkit";
import callAPI from "../api/callApi";

// all api call or fetch or call from CallApi refer to it
export const fetchToken = createAsyncThunk(
    "token/fetchToken",
      async (userTryToLogin, thunkAPI) => {
        try {
          const response = await callAPI('login', null, userTryToLogin); // Pas de token pour le login
          return response;
        } catch (error) {
          throw error;
        }
  });

export const fetchUserProfil = createAsyncThunk(
    "userProfil/fetchUserProfile",
    async (token) => {
      try {
        const response = await callAPI('profilePost', token, null); // Pas de token pour le login
        return response;
      } catch (error) {
        throw error;
      }
    }
  );
