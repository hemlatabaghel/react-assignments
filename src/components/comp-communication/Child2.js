import React, { useState } from 'react'

export default function Child2({setName}) {
    const [a,asetA] = useState("10")
    return (
        <>
        <div>
            Child2
            
        </div>
        <div> MY own data is : {a} </div>
        <div>
            <button onClick = {() => {setName("Hemlata")}}>Update Name</button>
        </div>
        </>
       
    )
}
