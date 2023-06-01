import React from 'react'

 function Cars({cars}) {
    return (
        <>
        {console.log("Car component is rendared..........")}
        <div>
            <ul>
                {cars.map(car =><li key ={car}>{car}</li>)}
            </ul>
        </div>
        </>
    )
}
export default React.memo(Cars)
