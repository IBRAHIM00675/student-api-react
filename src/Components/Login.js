import { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
    const { login, error, loading } = useContext(AuthContext); // Get login function and error from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useHistory();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const loginUser = async (e) => {
        e.preventDefault();
        await login(email, password, () => navigate.push("/All-students"));
    };



  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <div>
          <label>Email:</label>
          <input  type="email" name="email" placeholder="Enter your email" onChange={handleEmail} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password"name="password"placeholder="Enter your password"onChange={handlePassword}required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
