
import { combineReducers } from "redux";
import userProfilSliceReducer from "./userProfilSlice.reducer";
import userTokenSliceReducer from "./userTokenSlice.reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
  };

const rootReducer = combineReducers({
    userToken : userTokenSliceReducer,
    userProfile: userProfilSliceReducer
})
  export default persistReducer(persistConfig, rootReducer);

//  persistReducer;