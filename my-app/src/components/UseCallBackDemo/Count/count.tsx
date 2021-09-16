import React, { useState } from 'react';

interface IProps {
    count: number,
    text: string
}

const Count = (props: IProps) => {
    console.log(`rendering ${props.text}`)
    return(
        <div>
            {props.text} - {props.count}
        </div>
    )
}

export default React.memo(Count)  ;