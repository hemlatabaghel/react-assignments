import React, { useState } from 'react'

export default function ShowHidePassword() {
let [showPassword,setShowPassword] = useState(false);
const togglePassword = () =>{
    setShowPassword ((showPassword) => !showPassword)
}
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type={showPassword ? 'text' : 'password'} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"  checked={showPassword} onChange={togglePassword}/>
                    <label className="form-check-label" for="exampleCheck1">{!showPassword ? 'Show Password' : 'Hide Password'}</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style = {{height:"200px"}}></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
            <br/>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
