import React, { useState, useCallback } from 'react'
import Cars from '../memo/Cars';
import CounterMemo from '../memo/CounterMemo';

export default function UseCallBacl() {
    const [cars,setCars] = useState(['Tata','Honda']);
    const [count,setCount] = useState(0);
    
    const increament = useCallback(
        () => {
            setCount(count+1)
        },
        [count],
    ) 
    const addCar = useCallback(
        () => {
            setCars([...cars,"Toyota"])
        },
        [cars],
    ) 
    return (
        <>
            <div className="container">
                <div>This is Parent Component</div>
                <button onClick={()=>setCount(count+1)}>Increament</button>
                <button onClick={()=>setCars([...cars,"Maruti"])}>Add Car</button>

            </div>
            <div className="container">
            <div className="row">
                <p>Counter Component</p>
                <CounterMemo count = {count} increament = {increament}/>
            </div>
            </div>
            <div className="container">
                <div className="row">
                    <p>Cars Component</p>
                    <Cars cars = {cars} addNewCar = {addCar}/>
                </div>
            </div>
        </>
    )
}
