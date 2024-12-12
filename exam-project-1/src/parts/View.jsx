import React from "react";
import { useNavigate } from "react-router-dom";

function View({ data, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleEdit = (index) => {
    // Navigate to the Edit page and pass the data and index
    navigate("/edit", { state: { index, data: data[index] } });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h2>View Data</h2>
            </div>
            <div className="card-body">
              {data.length === 0 ? (
                <p>No data available</p>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => handleEdit(index)} // Navigate to Edit
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm ml-2"
                            onClick={() => handleDelete(index)} // Delete button
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="d-grid">
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate("/add")}
                >
                  Add More Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
