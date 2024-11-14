import React, { useState } from "react";
import "./LoginRegistration.css";
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa";
const LoginRegistration = () => {

  const [action,setAction] = useState ("");

  const registerLink = () =>{
     setAction(' active');
  };

  const loginLink = () =>{
    setAction('');
 };
  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't Have An Account?<a href="#" onClick={registerLink}>Register</a>
            </p>
          </div>
        </form>
      </div>


      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
               I Agree To The Terms & Condition
            </label>
          </div>
          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Already Have An Account?<a href="#" onClick={loginLink}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegistration;


