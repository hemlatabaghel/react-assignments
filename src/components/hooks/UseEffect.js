import React, {useState, useEffect} from 'react'

export default function UseEffect() {
    const [a, setA] = useState(10);
    const [b,setB] = useState(20);
    const[c,setC] = useState(30);

    useEffect( () => {
        console.log("useEffect is called ....")
    },[a])
    console.log("Rendering ..")
    return (
        <>
        <div className="container">
            <div>A value is: {a} </div>
            <div>B value is: {b} </div>
            <div>C value is: {c} </div>
        </div>
        <div className ="container">
            <button onClick = { () => setA(a + 1)}>Update - A</button>
            <button onClick = { () => setB(a + 1)}>Update - B</button>
            <button onClick = { () => setC(a + 1)}>Update - C</button>
        </div> 
    
    
    
    </>
    )
}
