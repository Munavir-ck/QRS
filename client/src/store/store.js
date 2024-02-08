import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/user";
import { adminReducer } from "./slice/admin";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigUser = { key: "user", storage, version: 1 };
const persistConfigAdmin = { key: "admin", storage, version: 1 };

const userPersistedReducer = persistReducer(
    persistConfigUser,
  userReducer
);

const adminPersistedReducer = persistReducer(
  persistConfigAdmin ,
adminReducer
);


export const store = configureStore({
  reducer: {
    user: userPersistedReducer,
    admin:adminPersistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const jhfawesgd = persistStore(store);
