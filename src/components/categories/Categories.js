import React from 'react'
import Categoriesjson from './Categories.json'
import  './Categories.css'
import Category from './Category'

export default function Categories() {
    return (
        <div className="container">
            <div className = "row">
                {
                    Categoriesjson.map((catItem,idx) => {
                        return <Category catItem = {catItem} key = {idx}/>
                    })
                }
            </div>
            
        </div>
    )
}
