import { configureStore } from "@reduxjs/toolkit";

import {persistStore , persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import rootReducer from "./CombinedReducers";
import { version } from "react";


const persistConfig = {
     key : 'root',
     storage,
 
};

const persistedReducer = persistReducer(persistConfig , rootReducer)


const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck: {
                ignoredActions: [PERSIST],
              },
            }),
        
    }
)

 const persistor = persistStore(store)

 export { store, persistor };