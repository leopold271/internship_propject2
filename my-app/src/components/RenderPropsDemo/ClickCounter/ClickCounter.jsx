import React, { useState } from 'react';

const ClickCounter = (props) => {

   

    return(
        <div>
            <button onClick={props.setCountFunction}>Clicked {props.count} times</button>
        </div>
    )
}

export default ClickCounter;