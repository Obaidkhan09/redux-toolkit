import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Redux/CounterSlice';

const store = configureStore({
    reducer : {
        counter : CounterReducer,
    }
});

export default store;