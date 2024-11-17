import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AllStudents = () => {
  const [records, setRecords] = useState([]);
  const [unauthorized, setUnauthorized] = useState(false);
  const navigate = useHistory();

  // Function to handle editing a student
  const loadEdit = (id) => {
    navigate.push("/updatestudent/" + id);
  };

  // Function to load a student's details
  const LoadStudent = (id) => {
    navigate.push("/StudentDetails/" + id);
  };

  // Fetch all student records on component mount
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    axios
    .get("http://localhost:4000/retrievestudents", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 403) {
          setUnauthorized(true);
        } else {
          console.error("Error fetching data:", err);
        }
      });
  }, []);

  return (
    <div className="form-container my-5">
      <div className="text-center">
        <h5 className="all">All Students Details</h5>

        {unauthorized && (
          <div className="alert alert-danger">
            Unauthorized access. Please log in.
          </div>
        )}

        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered shadow-lg">
            <thead className="thead-dark">
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.firstname}</td>
                  <td>{r.lastname}</td>
                  <td>{r.gender}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm">
                        Perform Actions
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <button
                          className="dropdown-item"
                          onClick={(e) => { e.preventDefault(); LoadStudent(r._id); }}
                        >
                          Details
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={(e) => { e.preventDefault(); loadEdit(r._id); }}
                        >
                          Edit Student
                        </button>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
