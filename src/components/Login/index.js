import styles from "./index.module.css";

import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      Welcome to Login Page
      <br/>
      <LoginForm></LoginForm>
    </div>
  )
}

export default LoginPage;