import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchWithAsyncThunk = createAsyncThunk(
    "tooto",
    async({url, method, headers, body}, thunkApi) => {
        try{
            const response = await fetch(url,{
                method: method,
                headers: headers,
                // headers: {
                //     "Content-Type": "application/json",
                //   },
                body: JSON.stringify(body),
            });
        
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }
        else{
            throw new Error(`Echec de la requête fetch:  ${response.status} ${response.statusText} `);

        }
        }
        catch(error){
            throw error;
        }
    }
);
