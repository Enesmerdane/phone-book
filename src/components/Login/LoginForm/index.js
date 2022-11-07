import styles from "./index.module.css";

import { useFormik } from "formik";

function LoginForm() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: ""
      },
      onSubmit: (values) => {
        console.log(values);
      },
      //loginValidationSchema TODO
    })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className = {styles.FormInput}>Username</label>
        <input
          className = {styles.FormInput}
          name = "username"
          value = {values.username}
          onChange = {handleChange}
          onBlur = {handleBlur}
        />

        {errors.username && touched.username && (
          <div className="error">
            {errors.username}
          </div>
        )}

        <br/>

        <label className = {styles.FormInput}>Password</label>
        <input
          className = {styles.FormInput}
          name = "password"
          value = {values.password}
          onChange = {handleChange}
          onBlur = {handleBlur}
        />

        {errors.password && touched.password && (
          <div className="error">
            {errors.password}
          </div>
        )}

        <br/>

        <button type="submit">
          Login
        </button>
        
        <br/>
        <br/>

      </form>
    </div>
  )
}

export default LoginForm;