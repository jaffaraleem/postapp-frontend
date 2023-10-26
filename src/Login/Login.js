import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useHistory hook
import "./login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../FirebaseConfig.js";

function Login(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize the history object

  const handleLogin = () => {
    // Implement your login logic here
    // Set the 'loggedIn' state to true on successful login
    signInWithPopup(auth, provider)
      .then((result) => {
        props.setUser(result.user.displayName);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // setUser(result.user.displayName);
        setLoggedIn(true);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
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
