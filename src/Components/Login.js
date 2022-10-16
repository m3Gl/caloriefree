import './Login.css'
import NewActivity from './NewActivity/NewActivity'
import Activity from './Activity'
import { useState } from 'react'
const Login = () => {
  const [show, setShow] = useState(false);


 

    return (

        <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="/activity">Sign In</a>
            </p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={() => setShow(true)}>login</button>
           
            <NewActivity  show={show} />
          

            <p className="message">
              Not registered? <a href="/activity">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    
       
    )

}
export default Login;
