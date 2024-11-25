import { getDatabase, ref, set, push } from "firebase/database";
import { app } from "../../firebase.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Add() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone) {
            setMessage("Please fill out all fields.");
            return;
        }
        const db = getDatabase(app);
        const userRef = ref(db, "users");
        const newUserRef = push(userRef);
        set(newUserRef, {
            name: name,
            phone: phone,
        })
            .then(() => {
                setMessage("Record added successfully!");
                setName("");
                setPhone("");
            })
            .catch((error) => {
                setMessage(`Error: ${error.message}`);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>Add Record</h3>
                        </div>
                        <div className="card-body">
                            {message && (
                                <div className={`alert ${message.includes("Error") ? "alert-danger" : "alert-success"}`}>
                                    {message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <Link to="/" className="btn text-black btn-link">View Records</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;
