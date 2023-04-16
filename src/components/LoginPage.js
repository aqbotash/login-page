import React from 'react'
import './index.css'

function LoginPage() {
  return (
    <div className = 'login-page'>
        <div className="row">

          <div className="col-md-6 d-flex align-items-center justify-content-center">

            <div className="text-part d-flex flex-column">
              <h1>LOGIN</h1>
              <input type='text' placeholder='username' />
              <input type='text' placeholder='password'/>
              <button type="submit">LOGIN</button>
              <div className ="d-flex justify-content-between mt-2">
                <a href ="">Forgot password?</a>
                <a href="">Register</a>
              </div>

            </div>

          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img src='https://media.istockphoto.com/id/1184633031/vector/cartoon-burger-vector-isolated-illustration.jpg?s=612x612&w=0&k=20&c=Z66WFszea0EkDxLe2179qxjBi4zvsOVvQsZ3AbQRjB8='></img>
          </div>
        
        </div>
        <div className ="login-page-rectangle"></div>
    </div>
  )
}

export default LoginPage