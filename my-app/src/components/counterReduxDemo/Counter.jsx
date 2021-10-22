import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        value: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch({ type: 'increment' }),
        handleDecrement: () => dispatch({ type: 'decrement' })
    }
}

const Counter = ({ value, handleDecrement, handleIncrement }) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleIncrement} > + </button>
            <button onClick={handleDecrement} > - </button>
        </div>

    )
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;