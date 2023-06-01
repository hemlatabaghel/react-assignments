import React, { useState } from 'react'

export default function StateDemo2() {
    let [flag,setFlag] = useState(true);

   

    return (
        <div>
            {flag ? <h1>This is paragraph</h1> : null}
            <button onClick = {() => {setFlag(!flag)}}>{flag?'Hide':'Show'}</button>
        </div>
    )
}
