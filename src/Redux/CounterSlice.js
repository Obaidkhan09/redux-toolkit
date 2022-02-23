import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0,
        age : 18,
    },
    reducers : {
        increment : (state) => {++state.value},
        decrement : (state) => { --state.value},
        reset : (state) => {state.value = 0},
        incrementAge : (state) => {++state.age},
        decrementAge : (state) => {--state.age},
        resetAge : (state) => {state.age = 18},
    },
});

export const { increment, decrement, reset, incrementAge, decrementAge, resetAge } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectAge = (state) => state.counter.age;
export default counterSlice.reducer;