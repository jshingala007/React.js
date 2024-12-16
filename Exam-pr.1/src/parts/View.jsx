import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function View({ data, onDelete, onToggleStatus }) {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm">
            <div className="card-header text-center bg-primary text-white">
              <h3>View Data</h3>
            </div>
            <div className="card-body">
              {data.length === 0 ? (
                <p className="text-center">No data available.</p>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
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
                          <span
                            className={`badge ${
                              item.isActive ? "bg-success" : "bg-danger"
                            }`}
                          >
                            {item.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => navigate("/edit", { state: { index, data: item } })}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm me-2"
                            onClick={() => onDelete(index)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-info btn-sm"
                            onClick={() => onToggleStatus(index)}
                          >
                            {item.isActive ? "Deactivate" : "Activate"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="d-grid mt-4">
                <button className="btn btn-primary" onClick={() => navigate("/add")}>
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
