import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import filterSlice from "./filterSlice";
import selecterSlice from "./selecterSlice";
import sorterSlice from "./sorterSlice";
import loginSlice from "./loginSlice";
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

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  sorter: sorterSlice,
  selecter: selecterSlice,
  filter: filterSlice,
  login: loginSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ["payload.0", "payload.1"],
        ignoredPaths: ["selecter.arrayDate.0", "selecter.arrayDate.1"],
      },
    }),
});

export let persistor = persistStore(store);
// selector dung o component se lam thay dong lenh nay: store.getState().sorter.value --> useSelector((state) => state.sorter.value)
//selector se lay dc current state dang luu o store --> tac dung nhu state o hook
//dispatch se lam thay cong viec cua setState bang cach day gia tri ve reducer de thay vao state cu duoi dang action.payload
//key cua store se dung o selector
