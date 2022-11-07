import styles from "./index.module.css";

import { useFormik } from "formik";
import validationSchema from "./validations";

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
      validationSchema
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
          <div className={styles.error}>
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
          <div className={styles.error}>
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