import { IPVersion } from 'net';
import React, { useState } from 'react';

interface Iprops {
    handleClick: () => void,
    children: React.ReactNode
}

const Button = (props: Iprops) => {
    console.log('rendering button', props.children)

    return(
        <div>
            <button onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
   
}

export default React.memo(Button);