import React, { useState } from 'react';
import ClickCounter from './ClickCounter/ClickCounter';
import HoverCounter from './HoverCounter/HoverCounter';
import Counter from './Counter/Counter';

const RenderPropsDemo = (props) => {

   

    return(
        <div>
            {/* <ClickCounter/>
            <HoverCounter/> */}
            <Counter render={(count, setCountFunction) => <ClickCounter count={count} setCountFunction={setCountFunction}/>}/>
            <Counter render={(count, setCountFunction) => <HoverCounter count={count} setCountFunction={setCountFunction}/>}/>
        </div>
    )
}

export default RenderPropsDemo;