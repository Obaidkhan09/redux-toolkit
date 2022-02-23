import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, decrementAge, increment, incrementAge, reset, resetAge } from '../Redux/CounterSlice';

export default function CounterInput() {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => dispatch(increment())}
                className='btnInc'
            >
                +
            </button>
            <button
                onClick={() => dispatch(decrement())}
                className='btnDec'
            >
                -
            </button>
            <button
                onClick={() => dispatch(reset())}
                className='btnRes'
            >
                Reset
            </button>

            <br />

            <button
                onClick={() => dispatch(incrementAge())}
                className='btnInc'
            >
                +
            </button>
            <button
                onClick={() => dispatch(decrementAge())}
                className='btnDec'
            >
                -
            </button>
            <button
                onClick={() => dispatch(resetAge())}
                className='btnRes'
            >
                Reset
            </button>
        </div>
    )
}
