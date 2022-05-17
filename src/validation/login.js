import Validator from "validator";
import isEmpty from "../utils/is-Empty";

export default function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";

  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email feild is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "eamil is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password feild is required";
  }

  const isValid = isEmpty(errors);
  return {
    errors,
    isValid,
  };
}
