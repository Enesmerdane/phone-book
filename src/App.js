import './App.css';

import { UserProvider } from "./context/UserContext";
import LoginPage from "./components/Login";

function App() {
  return (
    <UserProvider>
      <LoginPage>

      </LoginPage>
    </UserProvider>
  );
}

export default App;
