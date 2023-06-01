import React from 'react'
import { Navigate  } from 'react-router-dom';


export default function Authenticate({ children }) {
    const role = "student";
    // let history = useHistory();
    if(role === "student"){
        alert("Yoy are not allwed to go this page");
        return<Navigate  to="/home" replace/>
        // history.goBack()
        
    }
    return  children;
}
