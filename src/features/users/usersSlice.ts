import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  userList: User[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  userList: [],
  error: "",
}

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const a = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  )
  return a
})
export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false
        state.userList = action.payload
        state.error = ""
      }
    )
    builder.addCase(
      fetchUsers.rejected,
      (state, action) => {
        state.loading = false
        state.userList = []
        state.error = action.error.message || "Something went wrong"
      }
    )
  },
})

export default usersSlice.reducer
