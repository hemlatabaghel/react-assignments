import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function                                                                                                                       () {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <div className ="main-logo">
                        <div className ="logo">
                            <a>
                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" width="75" className="img-logo"/>
                            </a>
                            {/* <a className ="sub-logo">
                                Explore <span className="plus">Plus</span>
                                <img width="10" src = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"/>
                            </a> */}
                        </div>
                    </div>
                    
                    
                {/* <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li> */}
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">Link</a> */}
                        <NavLink  className="nav-link" to = '/home'>Home</NavLink>
                    </li>
                    <li className="nav-item">  
                        <NavLink className="nav-link" to= '/aboutus'> About Us </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to= '/careers'> Career </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to= '/contactus'> Contact Us </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to= '/productlist'> Product List </NavLink>
                    </li>
                </ul>
                
            </div>
                </div>
           
        </nav>
        
        
    )
}
