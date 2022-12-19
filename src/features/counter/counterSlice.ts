import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  counterValue: number;
};

const initialState: InitialState = {
  counterValue: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.counterValue += action.payload
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.counterValue -= action.payload
    },
  },
})

export const actions = counterSlice.actions
export default counterSlice.reducer
