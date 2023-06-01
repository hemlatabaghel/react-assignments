import React from 'react';
import products from '../listItem/products.json'

export default function ProductListTable() {
    return (
        <div className = "table-responsive">
       <table className= "table table-striped table-hover">
           <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
           {products.map((productList,idx)=>{
               return <>
                    <tbody>
                        <tr  key={idx}>
                            <td>{productList.id}</td>
                            <td>{productList.category}</td>
                            <td>{productList.title}</td>
                            <td><img src= {productList.image} alt="..." height="100px" width="100px"/></td>
                            <td>{productList.description}</td>
                            <td>{productList.price}</td>
                            <td>{productList.rating.count}</td>
                            <td>{productList.rating.rate}</td>

                        </tr>
                    </tbody></>
           })}
           
       </table>
       </div>
    )
}
