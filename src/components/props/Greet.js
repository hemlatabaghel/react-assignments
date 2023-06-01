import React from 'react'

export default function Greet({name,age,children}) {
    return (
        <div>
            Hello My {name} I am {age} years old .
            <br/>
            {children}
        </div>
    )
}
