import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase";

const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState({});
    const db = getDatabase(app);

    const viewData = () => {
        const usersRef = ref(db, "users");

        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            setRecord(data);
        });
    };

    useEffect(() => {
        viewData();
    }, []);

    const deleteUser = (id) => {
        const userRef = ref(db, `users/${id}`);
        remove(userRef)
            .then(() => {
                alert("Record deleted successfully.");
                viewData();
            })
            .catch((error) => {
                alert(`Failed to delete record: ${error.message}`);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8" align="center"> <br />
            <h2 className="text-3xl font-bold mb-6">View Users</h2> <br />
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="border px-4 py-2 text-left">#</th>
                            <th className="border px-4 py-2 text-left">Name</th>
                            <th className="border px-4 py-2 text-left">Phone</th>
                            <th className="border px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {record && Object.entries(record).length > 0 ? (
                            Object.entries(record).map(([key, val], index) => (
                                <tr
                                    key={key}
                                    className={`${
                                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                                >
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">{val.name}</td>
                                    <td className="border px-4 py-2">{val.phone}</td>
                                    <td className="border px-4 py-2 text-center">
                                        <button
                                            className="bg-red-500 text-black px-3 py-1 rounded-md border-0 mr-2 hover:bg-red-600"
                                            onClick={() => deleteUser(key)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="bg-blue-500 text-black px-3 border-0 mx-2 py-1 rounded-md hover:bg-blue-600"
                                            onClick={() =>
                                                navigate(`/edit`, { state: { key, val } })
                                            }
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="border px-4 py-4 text-center text-gray-500"
                                >
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="card-footer text-center ">
                            <Link to="/add" className="btn text-black px-3 border-0py-2 btn-link">Add Records</Link>
                        </div>
        </div>
    );
};

export default View;
