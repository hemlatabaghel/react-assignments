// import React, {useState}from 'react';

// export default function StateDemo1() {
//     // let count = 0;
//     let [count, setCount] = useState(0);

//     let increament = () => {
//         setCount(count +1);
//     }
//     return (
//         <>
//        <h2>State Demo 1</h2>
//        <p>Count is : {count}</p>
//        <button onClick = {increament}>increamennt</button>
//        </>
       
//     )
// }
import React, { Component } from 'react'

export default class StateDemo1 extends Component {
    state = {
        count:0
    }
    increament = () => {
        this.setState({count:this.state.count +1})
    }
    render() {
        return (
            <div>
                <p>Count is : {this.state.count}</p>
                <button onClick ={this.increament}> Increament</button>
            </div>
        )
    }
}

