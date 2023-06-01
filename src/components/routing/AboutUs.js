import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutUs() {
    const navigation = useNavigate();
    const navigateButton = function (){
        // for(let i = 1; i<=10000; i++)
        // {
        //     console.log("I am doing something")
        // }
        // navigation("/contactus")
        setTimeout(() => {
            navigation("/contactus")
        },5000)
    }
    return (
        <>
        <div className="container">

            <h2>
                This is Abou Us Page
            </h2>
            <Link to='/contactus'>Contact Us </Link>
                <button className="btn btn-primary" onClick=  {navigateButton}>Navigate Button</button>
                <button className="btn btn-warning"  onClick= {()=>navigation(-1)}>Go Back</button>
                <button className="btn btn-info" onClick={()=>navigation(1)}>Go Next</button>

        </div>
        </>

    
    )
}
