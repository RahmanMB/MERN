import toast from "react-hot-toast";

/** Validate login page username */
export const usenameValidate = async (values) => {
  const errors = usernameVerify({}, values);
  return errors;
};

/** validate password */
export const passwordValidate = async (values) => {
  const errors = passwordVerify({}, values);
  return errors;
};

const passwordVerify = (errors = {}, values) => {
  const specialChars = /[`!@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password is required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong password...!");
  } else if (values.password.length < 6) {
    errors.password = toast.error("Password must be at least 6 characters...!");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must contain special characters...!");
  }
  return errors;
};

/** validate username */
const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username is required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid username...!");
  }
  return error;
};
