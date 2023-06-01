import { product } from 'prelude-ls';
import React from 'react';
import products from '../listItem/products.json'

export default function ProductListCard() {

    return (
        <div className="container">
            <div className="row">
               { products.map((item,idx) => {
                  return <>
                   <div className="card" style={{width: "18rem"}} key = {idx}>
                    <img src={item.image} className="card-img-top" alt="..." height = "200" width = "200"/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{item.price}</li>
                        <li className="list-group-item">{item.rating.rate}</li>
                        <li className="list-group-item">{item.rating.count}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" class="btn btn-primary">View</a>
                    </div>
                </div> </>
                  
               }) }
            
                
            </div>
        </div>

    )
}
