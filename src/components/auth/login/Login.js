import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import validateLoginInput from "../../../validation/login";
import { loginUser } from "../../../actions/authActions";
import isEmpty from "../../../utils/is-Empty";
import TextFieldGrop from "../../common/TextFieldGroup";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isValidInput, setIsValidInput] = useState(false);

  const onChange = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);

      default:
        break;
    }
  };
  const newLogin = {
    email: email,
    password: password,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    e.preventDefault();

    let result = validateLoginInput(newLogin);
    // console.log("****", result);
    setIsValidInput(result.isValid);
    //setErrors(result.errors)
    !result.isValid ? setErrors(result.errors) : setErrors({});
    //dispatch(signUpUser(newUser, navigate));

    console.log("after");
  };
  useEffect(() => {
    if (isValidInput && isEmpty(errors)) {
      dispatch(loginUser(newLogin, navigate));
    }
    // Return early, if this is the first render:console.log('Do something after counter has changed', isValidInput);
  }, [isValidInput]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <form onSubmit={onSubmit}>
            <TextFieldGrop
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              error={
                !isValidInput
                  ? !isEmpty(errors.email)
                    ? errors.email
                    : ""
                  : ""
              }
            />
            <TextFieldGrop
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              error={
                !isValidInput
                  ? !isEmpty(errors.password)
                    ? errors.password
                    : ""
                  : ""
              }
            />
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
