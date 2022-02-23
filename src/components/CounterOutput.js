import React from 'react'
import { useSelector } from 'react-redux';
import { selectAge, selectCount } from '../Redux/CounterSlice';


export default function CounterOutput() {
    const counter = useSelector(selectCount);
    const age = useSelector(selectAge);
  return (
    <div>
        <h3>Counter Value : {counter}</h3>
        <h3>Age Value : {age}</h3>
    </div>
  )
}
