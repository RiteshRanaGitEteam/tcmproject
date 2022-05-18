import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextFieldGrop from "../../common/TextFieldGroup";
//import SelectListGroup from "../../common/SelectListGroup";
import validateSignupInput from "../../../validation/signup";
import { signUpUser } from "../../../actions/authActions";
import isEmpty from "../../../utils/is-Empty";

import AuthImageCol from "../authImageCol/AuthImageCol";
import { MainSection, SignupRow, SignupCol } from "./Signup.styles";
const Signup = () => {
  // const typeOption = [
  //   { label: "Organization", value: "Organization" },
  //   { label: "User", value: "User" },
  // ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [isValidInput, setIsValidInput] = useState(false);

  const onChange = (e) => {
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);
      case "organization":
        return setOrganization(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      case "password2":
        return setPassword2(e.target.value);
      default:
        break;
    }
  };
  const newUser = {
    name: name,
    organization: organization,
    email: email,
    password: password,
    password2: password2,
  };
  const onSubmit = (e) => {
    e.preventDefault();

    let result = validateSignupInput(newUser);
    // console.log("****", result);
    setIsValidInput(result.isValid);
    //setErrors(result.errors)
    !result.isValid ? setErrors(result.errors) : setErrors({});
    //dispatch(signUpUser(newUser, navigate));

    console.log("after");
  };

  useEffect(() => {
    if (isValidInput && isEmpty(errors)) {
      dispatch(signUpUser(newUser, navigate));
    }
    // Return early, if this is the first render:console.log('Do something after counter has changed', isValidInput);
  }, [isValidInput, name, organization, password, email]);

  return (
    <MainSection>
      <SignupRow>
        <SignupCol xs={12} md={6} lg={6}>
          <AuthImageCol />
        </SignupCol>
        <SignupCol xs={12} md={6} lg={6} >
          {/* <div className="signup">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto"> */}
          <h1 className="display-4 text-center">WELCOME !</h1>
          <p className="text-center">First time here?</p>
          <p className="text-center">Create account</p>

          <form onSubmit={onSubmit}>
            <TextFieldGrop
              placeholder="name"
              name="name"
              value={name}
              onChange={onChange}
              error={
                !isValidInput ? (!isEmpty(errors.name) ? errors.name : "") : ""
              }
            />

            {/* <SelectListGroup
                placeholder="Type"
                name="Type"
                options={typeOption}
                info="Type"
              /> */}

            <TextFieldGrop
              placeholder="Name of Organization"
              name="organization"
              value={organization}
              onChange={onChange}
              error={
                !isValidInput
                  ? !isEmpty(errors.organization)
                    ? errors.organization
                    : ""
                  : ""
              }
            />
            <TextFieldGrop
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
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

            <TextFieldGrop
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              error={
                !isValidInput
                  ? !isEmpty(errors.password2)
                    ? errors.password2
                    : ""
                  : ""
              }
            />

            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
          {/* </div>
              </div>
            </div>
          </div> */}
        </SignupCol>
      </SignupRow>
    </MainSection>
  );
};

export default Signup;
