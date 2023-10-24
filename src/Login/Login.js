import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useHistory hook
import "./login.css";
import FacebookLogin from "react-facebook-login";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize the history object

  const handleLogin = () => {
    // Implement your login logic here
    // Set the 'loggedIn' state to true on successful login
    setLoggedIn(true);

    // Redirect to the /add-post route
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {
        !loggedIn ? (
          <button className="login-button" onClick={handleLogin}>
            Login with Facebook
          </button>
        ) : null // No message is displayed; instead, redirect to /add-post
      }
    </div>
  );
}

export default Login;
