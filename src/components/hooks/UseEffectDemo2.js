import React, {useState, useEffect} from 'react'

export default function UseEffectDemo2() {
    const [userId, setUserId] = useState(1);
    const [user,setUser] = useState({
        id:"",
        name:"",
        username:"",
        email:"",
        website:"",
        phone:""
    });

    useEffect(() => {
        async function fetchData() {
            console.log("useEffect is called...");
            let response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            let data = await response.json();
            setUser({...data})

            console.log("data",data)
        }
        fetchData();
    },[userId]);
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="container">
            <div>
             <button className = "btn btn-primary" type="button" onClick = {()=>{setUserId(userId+1)}}>Increament UserId</button>
            </div>

        
        <br/>
          <div className="card" style={{width: "18rem"}} >
                    <img src= "https://www.w3schools.com/howto/img_avatar.png" className="card-img-top" alt="..." height = "200" width = "200"/>
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.username}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{user.website}</li>
                        <li className="list-group-item">{user.phone}</li>
                        <li className="list-group-item">{userId}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="btn btn-primary">View</a>
                    </div>
                </div>  
        </div>
        </>
    )
}
