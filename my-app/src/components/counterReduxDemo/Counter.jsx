import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrement, increment} from './CounterSlice'


const Counter = () => {
    const value = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())} > + </button>
            <button onClick={() => dispatch(decrement())} > - </button>
        </div>
        
    )
}

export default Counter;