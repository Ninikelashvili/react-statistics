import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login({ isActive, handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!email || !password) {
      alert("Don't have an account?");
      handleClick(false);
    }
    if (userData.email === email && userData.password === password) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className={isActive ? "loginPage " : "loginPageActive"}>
        <button className="goToRegister" onClick={handleClick}>
          <FaUser />
        </button>
        <div className="loginForm-group">
          <h1>Let's login</h1>
          <form className="loginForm" onSubmit={submit}>
            <input
              type="email"
              className="log-input"
              name="email"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="log-input"
              name="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" className="loginBtn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
