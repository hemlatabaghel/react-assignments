import React from 'react'

export default function ListDemo2() {

    let employees = [
            { eId:101, name:"Hemlata", sal:555000 },
            { eId:102, name:"Harshit", sal:55000 },
            { eId:103, name:"Shambhu", sal:52000 },
            { eId:104, name:"Anand", sal:523000 },
            { eId:105, name:"Atharva", sal:5000 },
            { eId:106, name:"Nikhil", sal:235000 },
    ];
    return  <>
            <h2>Employee List</h2>
            <table className= "table table-striped table-hover">
                <thead>
                    <tr>
                        {Object.keys(employees[0]).map((col,i )=><th key={i}>{col}</th>)}
                    </tr>
                </thead>
                <tbody>

                {employees.map((emp,idx) => {

                    return <tr>
                        {Object.keys(emp).map((key) => {
                            return <td key = {key}>{emp[key]}</td>
                        })}
                        </tr>
                            
                })}
                </tbody>
            </table>
        </>
    
}
