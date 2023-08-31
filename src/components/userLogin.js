import React, { useState, useEffect } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import "../styles/login.css";
import { useContext } from "react";
import { MyContexts } from "./myContext";
function UserLogin() {
  const nav = useNavigate();
  const initialValue = { email: "", password: "" };
  const [formvalues, setFormValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { setLogin, userData, setCurrentUser } = useContext(MyContexts);

  const currentUser = userData.filter(
    (user) => user.email === formvalues.email
  );

  console.log(formvalues.email);

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  }, [errors]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formvalues);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});

      setIsSubmit(true);
    } else {
      setErrors(validationErrors);
    }
  };
  // console.log(currentUser.password);
  function handelLogin() {
    const validationErrors = validate(formvalues);

    if (Object.keys(validationErrors).length === 0) {
      setLogin(true);
      nav("/");
      setCurrentUser(formvalues.email);
    } else {
      setLogin(false);
      alert("you are not loged");
    }
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "enter the correct email";
    } else if (formvalues.email !== currentUser[0].email) {
      errors.email = "user does not exist";
    }

    if (!values.password) {
      errors.password = "password is required !";
    } else if (values.password.length < 8) {
      errors.password = "minimum 10 charecters";
    } else if (values.password.length > 25) {
      errors.password = "maximum 25 charecters";
    } else if (values.password !== currentUser[0].password) {
      errors.password = "incorrect password!";
    }

    return errors;
  };

  return (
    <div className="reg-container">
     <NavLink to={"/"}><img 
        src="https://pahpcpsab2cprodne.blob.core.windows.net/b2cui/Vip/Images/logo.svg"
        alt="logo"
      /></NavLink> 

      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          {/* <pre> {JSON.stringify(formvalues, undefined, 2)}</pre> */}

          <h2>Welcome back!</h2>

          <label>Your email</label>
          <br />
          <input
            type="email"
            name="email"
            className="big-box"
            placeholder="Enter your email"
            value={formvalues.email}
            onChange={handleChange}
          ></input>
          <br />
          <p> {errors.email} </p>
          <br />
          <label>Password </label>
          <br />
          <input
            type="password"
            name="password"
            className="big-box"
            placeholder="Enter a password"
            value={formvalues.password}
            onChange={handleChange}
          ></input>
          <br />
          <p> {errors.password} </p>

          <br />
          <button className="login-btn" onClick={() => handelLogin()}>
            {" "}
            Login{" "}
          </button>
        </form>
        <button
          onClick={() => nav("/home")}
          className={"admin"}
          style={{
            borderRadius: "25px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Admin
        </button>
      </div>
    </div>
  );
}

export default UserLogin;
