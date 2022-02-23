import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement, reset } from "./Action";

const CounterReducer = createReducer(10, {
    [increment] : (state) => state + 1,
    [decrement] : (state) => state - 1,
    [reset] : (state) => state - state,
});
export default CounterReducer;