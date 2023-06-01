import React from 'react'
import Categories from './Categories.json'
import  './Categories.css'

export default function Category({catItem,idx}) {
    return (
        <div className = "col">
            <div className = "category text-center">
                <img src = {catItem.image_url}/>
                <div>{catItem.text}</div>
            </div>
            
        </div>
    )
}
