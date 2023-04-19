import React, {useEffect} from "react";
import { connect } from "react-redux";
import {updateAuthorization} from "../../redux/auth-reducer";
import { useFormik } from "formik";
import styles from "../Common/FormControls/FormControls.module.css"
import { useNavigate } from "react-router-dom"

const LoginForm = ({isAuth, _id, updateAuthorization}) => {

  const navigate = useNavigate()

  useEffect(() => {
    if(isAuth) {
      navigate(`/profile/${_id}`);
    }
  }, [isAuth]);

  const validate = ({login, password}) => {
    const errors = {};

    if (!login) {
      errors.login = "Required";
    }

    if (!password) {
      errors.password = "Required";
    }

    if(login && login.length > 30) {
      errors.login = "max length is 30 symbol";
    }

    if(password && password.length > 30) {
      errors.password = "max length is 30 symbol";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validate: validate,
    onSubmit: ({login: loginValue, password}, {setErrors}) => {
      updateAuthorization(loginValue, password, setErrors)},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Login and password</h1>
      <div className={styles.formSubTittle}>Login</div>
      <input
        name={"login"}
        type={"text"}
        placeholder={"login"}
        onChange={formik.handleChange}
        value={formik.values.login}/>
      <div className={styles.formSubTittle}>Password</div>
      <input
        name={"password"}
        placeholder={"password"}
        onChange={formik.handleChange}
        value={formik.values.password}/>
      {formik.errors.password && <div className={styles.formSummeryError}>{formik.errors.password}</div>}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}




const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    _id: state.auth._id,
  }
}



export default connect(mapStateToProps, {updateAuthorization})(LoginForm);