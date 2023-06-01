import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'


export default function Parent() {
    const [name,setName] = useState("Sachin")
    return (
        <>
            <div className="container">
                <div className="row">
                    <div>I am Parent Component</div>
                    <div>My own data is {name}</div>
                </div>
                <hr/>
                <div className="col-6">
                   <Child1 name = {name}/>
                </div>
                <div className="col-6">
                    <Child2 setName = {setName} />
                </div>
            </div>
        </>
    )
}
