import React from 'react';

const Register = () => {
    
  return (
    <div className="form-container">
      
      <form>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" placeholder="Enter gender" required /> 
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
