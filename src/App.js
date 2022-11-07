import './App.css';

import { UserProvider } from "./context/UserContext";
import LoginPage from "./components/Login";
import HomePage from "./components/Home";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <LoginPage>
        
      </LoginPage>
    </UserProvider>
  );
}

export default App;
