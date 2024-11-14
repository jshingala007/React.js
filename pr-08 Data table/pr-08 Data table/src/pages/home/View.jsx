import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('users')) || [];
  const [users, setUsers] = useState(data);
  const [selectedIds, setSelectedIds] = useState([]); // Track selected checkboxes
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state for filter and delete operations

  // Filtered data based on filters
  const filteredUsers = users
    .filter((user) => !statusFilter || user.status === statusFilter)
    .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      } else if (sortOrder === "dsc") {
        return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
      }
      return 0;
    });

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setIsLoading(true);
      const updatedUsers = users.filter((user) => user.id !== id);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      setIsLoading(false);
      alert("Record deleted");
    }
  };

  const handleCheckboxChange = (id, isChecked) => {
    setSelectedIds((prevSelectedIds) => {
      if (isChecked) {
        return [...prevSelectedIds, id];
      } else {
        return prevSelectedIds.filter((userId) => userId !== id);
      }
    });
  };

  const handleMultipleDelete = () => {
    if (selectedIds.length > 0 && window.confirm("Are you sure you want to delete selected users?")) {
      setIsLoading(true);
      const updatedUsers = users.filter((user) => !selectedIds.includes(user.id));
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      setSelectedIds([]);
      setIsLoading(false);
      alert("Selected users deleted");
    } else {
      alert("Select at least one user");
    }
  };

  const resetFilters = () => {
    setStatusFilter("");
    setSearchQuery("");
    setSortOrder("");
  };

  return (
    <div className="container-fluid mt-5 shadow p-5">
      {/* Filters and buttons */}
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-lg-3 mb-3">
          <select
            className="form-control"
            onChange={(e) => setStatusFilter(e.target.value)}
            value={statusFilter}
            aria-label="Filter by status"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
        </div>
        <div className="col-lg-3 mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Search by name"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            aria-label="Search by name"
          />
        </div>
        <div className="col-lg-3 mb-3">
          <select
            className="form-control"
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            aria-label="Sort users"
          >
            <option value="">Sort By Name</option>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>
        <div className="col-lg-2 mb-3">
          <button className="btn btn-danger w-100" onClick={resetFilters} aria-label="Reset filters">
            Reset Filters
          </button>
        </div>
      </div>

      {/* Table to display users */}
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Join Date</th>
                <th>Actions</th>
                <th>Status</th>
                <th>
                  <button
                    onClick={handleMultipleDelete}
                    style={{ fontWeight: "bold", background: "transparent", border: "none" }}
                    aria-label="Delete selected users"
                  >
                    Multiple Delete
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="10" className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center">No users found</td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.gender}</td>
                    <td>{user.course}</td>
                    <td>{user.date}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="btn btn-danger btn-sm"
                        aria-label={`Delete ${user.name}`}
                      >
                        Delete
                      </button>
                      &nbsp;
                      <button
                        onClick={() => navigate(`/edit`, { state: user })}
                        className="btn btn-primary btn-sm"
                        aria-label={`Edit ${user.name}`}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <span className={`badge ${user.status === "Active" ? "bg-success" : "bg-danger"}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(user.id)}
                        onChange={(e) => handleCheckboxChange(user.id, e.target.checked)}
                        aria-label={`Select ${user.name}`}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action buttons */}
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-lg-6 text-center">
          {selectedIds.length > 0 ? (
            <button className="btn btn-danger" onClick={handleMultipleDelete} aria-label="Delete selected users">
              Delete Selected
            </button>
          ) : (
            <Link to="/add">
              <button className="btn btn-success" aria-label="Add a new user">Add User</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default View;
