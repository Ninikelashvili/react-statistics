import { useState } from "react";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const saveData = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };

    if (!name || !email || !password) {
      alert("Fill in all the fields");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      setName("");
      setEmail("");
      setPassword("");
      alert("You have successfully registered!");
      handleClick();
    }
  };

  return (
    <>
      <div>
        <Login isActive={isActive} handleClick={handleClick} />
      </div>
      <div className="registration-content">
        <h1>Registration</h1>
        <div className="form-group">
          <form className="regForm" onSubmit={saveData}>
            <input
              type="text"
              className="reg-input"
              name="name"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              className="reg-input"
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
              className="reg-input"
              name="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="regBtn" type="submit">
              Registration
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
