import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import userListReducer from "../features/users/usersSlice"
import { createLogger } from "redux-logger"

const logger = createLogger()

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch