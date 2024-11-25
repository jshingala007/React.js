import React, { useEffect, useState } from "react";
import { app } from "../../firebase.js";
import { getDatabase, ref, update } from "firebase/database";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");
  const [message, setMessage] = useState("");

  const db = getDatabase(app);

  // Load user data when the component mounts
  useEffect(() => {
    if (location?.state && location.state[0] && location.state[1]) {
      setEditId(location.state[0]); // User ID
      setName(location.state[1].name || ""); // Name
      setPhone(location.state[1].phone || ""); // Phone number
    }
  }, [location?.state]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      setMessage("Error: Both fields are required!");
      return;
    }

    const userRef = ref(db, `users/${editId}`);
    update(userRef, { name, phone })
      .then(() => {
        setMessage("Record updated successfully!");
        setTimeout(() => navigate("/"), 2000); // Redirect after success
      })
      .catch((error) => {
        setMessage(`Error updating record: ${error.message}`);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h3>Edit User</h3>
            </div>
            <div className="card-body">
              {message && (
                <div
                  className={`alert ${
                    message.includes("Error") ? "alert-danger" : "alert-success"
                  }`}
                >
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Update
                </button>
              </form>
            </div>
            <div className="card-footer text-center">
              <Link to="/" className="btn btn-link">
                View Records
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
