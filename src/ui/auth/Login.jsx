import { useContext, useCallback, useState, useRef, useEffect } from "react";
import AuthContext from "../../context/auth-context";
import styles from "./Login.module.css";
import Input from "../input/Input";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const context = useContext(AuthContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = useCallback((event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let _errors = errors;

    switch (name) {
      case "email":
        _errors.email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        setEmail(value);
        break;
      case "password":
        _errors.password = value.length < 8 ? "Password is not valid!" : "";
        setPassword(value);
        break;
      default:
        break;
    }

    setErrors(_errors);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors) && email.length > 0 && password.length > 0) {
      console.info("Valid Form");
      context.handleLogin(event);
    } else {
      console.error("Invalid Form");
    }
  };

  return (
    <div className={styles.login__container}>
      <header className={styles.login__heading}>
        <h2>Sign In</h2>
      </header>
      <div className={styles.login__form_container}>
        <form
          className={styles.login__form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete='off'>
          <Input
            className={`${styles.login__form_email} ${
              errors.email.length > 0 ? styles.login__error : ""
            }`}
            ref={inputRef}
            type='email'
            name='email'
            label='Enter email id'
            value={email.toString()}
            noValidate
            onChange={handleChange}
            placeholder='Enter email here...'
          />
          <Input
            className={`${styles.login__form_password} ${
              errors.password.length > 0 ? styles.login__error : ""
            }`}
            type='password'
            name='password'
            value={password}
            noValidate
            onChange={handleChange}
            placeholder='Enter password here...'
          />
          <div>
            <button className={styles.login__button}>Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
