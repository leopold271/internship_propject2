import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const setCountFunction = () => {
        setCount(count + 1);
    }
    
    return(
        <div>
            {props.render(count, setCountFunction)}
        </div>
    )
}

export default Counter;