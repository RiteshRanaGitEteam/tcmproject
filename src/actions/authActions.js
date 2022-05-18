// import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
// import url from "../config/url";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_eY1YMlSd9",
  ClientId: "3hor38d7can1njkclevakfi2u9",
};
const UserPool = new CognitoUserPool(poolData);
// Sign up User

export const signUpUser = (userData, navigate) => (dispatch) => {
  console.log("****user data", userData);
  UserPool.signUp(
    userData.email,
    userData.password,
    [{ Name: "custom:organization", Value: userData.organization }],
    null,
    (err, data) => {
      if (err) {
        console.error(err.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.message,
        });
      } else {
        console.log(data);
        navigate("/login");
      }
    }
  );
  //   axios
  //     .post(url + "/api/users/register", userData)
  //     .then((res) => history.push("/login"))
  //     .catch((err) =>
  //       dispatch({
  //         type: GET_ERRORS,
  //         payload: err.response.data,
  //       })
  //     );
};

// Login user

export const loginUser = (userData) => (dispatch) => {
  console.log("***login user data", userData, poolData);
  const user = new CognitoUser({
    Username: userData.email,
    Pool: UserPool,
  });
  console.log("**user", user);
  const authDetails = new AuthenticationDetails({
    Username: userData.email,
    Password: userData.password,
  });

  console.log("**authDetails", authDetails);
  user.authenticateUser(authDetails, {
    onSuccess: (data) => {
      console.log("onSuccess:", data);
      // const { token } = data.accessToken.jwtToken;
      // console.log("*tocken", token);
    },

    onFailure: (err) => {
      console.error("onFailure:", err);
      dispatch({
        type: GET_ERRORS,
        payload: err.message,
      });
    },

    newPasswordRequired: (data) => {
      console.log("newPasswordRequired:", data);
    },
  });
  // axios
  //   .post(url + "/api/users/login", userData)
  //   .then((res) => {
  //     // save to localStorage
  //     const { token } = res.data;
  //     // set token to LocalStorage
  //     localStorage.setItem("jwtToken", token);
  //     // Set token to Auth header
  //     setAuthToken(token);
  //     // Decode the token to get user data
  //     const decoded = jwt_decode(token);
  //     // set current user data
  //     dispatch(setCurrentUser(decoded));
  //   })
  //   .catch((err) =>
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err.response.data,
  //     })
  //   );
};

// set current user

// export const setCurrentUser = (decoded) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded,
//   };
// };

// Log out user

// export const logoutUser = () => (dispatch) => {
//   // Remove token from localStorage
//   localStorage.removeItem("jwtToken");
//   // remove auth header for future request
//   setAuthToken(false);
//   // set current user to {} which will set isAuntheticated to false
//   dispatch(setCurrentUser({}));

//   // window.location.href = '/';
// };
