// import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
// import url from "../config/url";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_3b7uprCxb",
  ClientId: "484it1uh0bqtd9p6go7lirk2s2",
};
const UserPool = new CognitoUserPool(poolData);
// Sign up User

export const signUpUser = (userData, navigate) => (dispatch) => {
  console.log("****user data", userData);
  UserPool.signUp(userData.email, userData.password, [], null, (err, data) => {
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
  });
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

// export const loginUser = (userData) => (dispatch) => {
//   axios
//     .post(url + "/api/users/login", userData)
//     .then((res) => {
//       // save to localStorage
//       const { token } = res.data;
//       // set token to LocalStorage
//       localStorage.setItem("jwtToken", token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode the token to get user data
//       const decoded = jwt_decode(token);
//       // set current user data
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

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
