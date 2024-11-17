// import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const navigate = useHistory();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Student registered with Email: ${email}`);
      };


  return (
    <div className="form-container">
      <h2 className="register">Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input  type="email" name="email" placeholder="Enter your email"  required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password"name="password"placeholder="Enter your password"required/>
        </div>
        <p className="pa"><a href="">Register?</a></p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
