// import { memo } from "react" 
import React  from 'react'

 function CounterMemo({count}) {
    return (
        <>
        {console.log("Count is Rendered.............")}
        <div>
            <p>Count is : {count}</p>
        </div>
        </>
    )
}
export default React.memo(CounterMemo)
