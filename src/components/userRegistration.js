import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import "../styles/registrationForm.css";
import { useState, useContext } from "react";
import { MyContexts } from "./myContext";

function UserRegistration() {
  const { setUserData, userData } = useContext(MyContexts);
  // const history = useNavigate();
  console.log(userData);

  const initialValue = {
    email: "",
    password: "",
    confPass: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
   
    if (Object.keys(errors).length === 0) {
      // console.log(formValues);
    }
  }, [errors, formValues]);
console.log(formValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    // setIsSubmit(true);
  };
console.log(errors);
  const handleClick = () => {

    setUserData((prev) => [
      ...prev,
      {
        email: formValues.email,
        password: formValues.password,
        key: formValues.confPass,
      },
    ]);
    // if (errors.length === 0) {
     
    //   // history("/login");
    // }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "enter the correct email";
    }
    if (!values.password) {
      errors.password = "password is required !";
    } else if (values.password.length < 10) {
      errors.password = "minimum 10 charecters";
    } else if (values.password.length > 25) {
      errors.password = "maximum 25 charecters";
    }
    if (!values.confPass) {
      errors.confPass = "password confirmation is required !";
    } else if (values.password !== values.confPass) {
      errors.confPass = "passwords are not matching";
    }

    return errors;
  };

  return (
    <div className="reg-container">
      <Link to={"/"}>
        {" "}
        <img
          src="https://pahpcpsab2cprodne.blob.core.windows.net/b2cui/Vip/Images/logo.svg"
          alt="logo"
        />
      </Link>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          {/* <pre> {JSON.stringify(formValues, undefined, 2)}</pre> */}
          <h2>Registration</h2>
          <label>Your email</label>
          <br />
          <input
            placeholder="Your email address"
            type="email"
            name="email"
            className="big-box"
            value={formValues.email}
            onChange={handleChange}
          ></input>
          <p>{errors.email}</p>
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            placeholder="Enter a password"
            type="password"
            name="password"
            className="big-box"
            value={formValues.password}
            onChange={handleChange}
          ></input>
          <p>{errors.password}</p>
          <br />
          <br />
          <label> Confirm password</label>
          <br />
          <input
            placeholder="Confirm your password"
            type="password"
            name="confPass"
            className="big-box"
            value={formValues.confPass}
            onChange={handleChange}
          ></input>
          <p>{errors.confPass}</p>
          <br />
          <br />
          <h5>Minimum 10 characters</h5>
          <h5>Must contain uppercase and lowercase</h5>
          <h5>Must contain letters and numbers</h5>
          <input type="checkBox" className="checkB"></input>
          <span>
            I agree to the Pets at HomeTerms & Conditions and
            Privacy Policy.
          </span>{" "}
          <br />
          <br />
          <button
            className="ca-btn"
            type="submit"
            onClick={() => handleClick()}
          >
            {" "}
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegistration;
