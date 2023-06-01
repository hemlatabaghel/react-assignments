import React from 'react';
import User from '../../src/listItem/User.json';

export default function UserList() {
    return (
        <>
            <table className= "table table-striped table-hover">
                {/* <thead>
                    <tr>
                        {Object.keys(User[0].company((col,i) => <th key={i}>{col}</th>))}
                    </tr>
                </thead> */}
                <tbody> 

                    {User.map((user) => {
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    })}
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
