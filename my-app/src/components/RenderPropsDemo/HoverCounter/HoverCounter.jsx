import React, { useState } from 'react';

const HoverCounter = (props) => {

    
    return(
        <div>
            <h2 onMouseOver={props.setCountFunction}>Hovered {props.count} times</h2>
        </div>
    )
}

export default HoverCounter;