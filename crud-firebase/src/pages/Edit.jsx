import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../firebase.js"
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [editid, setEditId] = useState("")


    useEffect(() => {
        setEditId(location?.state[0])
        setName(location?.state[1]?.name)
        setPhone(location?.state[1]?.phone)
    }, [location?.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app)


        const user = ref(db, `users/${editid}`)
        update(user, {
            name: name,
            phone: phone
        })
        alert("record update")
        navigate(`/`);

    }
    return (
        <div align="center">
            <h2>Add Record</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
                <label htmlFor="phone">Phone Number:</label><br />
                <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br /><br />
                <input type="submit" defaultValue="Submit" />
            </form>
            <Link to={`/`}>View</Link>
        </div>
    )
}
export default Edit