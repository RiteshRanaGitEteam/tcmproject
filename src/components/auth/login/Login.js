import React from "react";

import TextFieldGrop from "../../common/TextFieldGroup";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");
    
  };

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
            />
            <TextFieldGrop
              type="password"
              placeholder="Password"
              name="password"
            />
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
