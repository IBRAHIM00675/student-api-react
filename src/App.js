import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import AddStudent from './Components/AddStudent';
import AllStudents from './Components/AllStudents';
import UpdateStudent from './Components/UpdateStudent';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> 
            <Route path="/all-students" component={AllStudents} />
            <Route path="/add-student" component={AddStudent} />
            <Route path="/updatestudent/:id" component={UpdateStudent} />
            <Route path="/login" component={Login}    /> 
                 </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
