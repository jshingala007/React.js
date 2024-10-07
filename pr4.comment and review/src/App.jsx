import { useState } from "react";
import './App.css'; // Importing the CSS file

function App() {
  const [data, setData] = useState([{ name: "", email: "", salary: "" }]);

  const handleClick = () => {
    setData([...data, { name: "", email: "", salary: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const updatedData = [...data];
    updatedData[i][name] = value;
    setData(updatedData);
  };

  const handleCancel = (i) => {
    const updatedData = data.filter((_, index) => index !== i);
    setData(updatedData);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Employee Form</h1>
      <button className="add-button" onClick={handleClick}>ADD</button>
      {data.map((val, i) => (
        <div key={i} className="form-row">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={val.name}
              onChange={(e) => handleChange(e, i)}
              className="form-input"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={val.email}
              onChange={(e) => handleChange(e, i)}
              className="form-input"
            />
          </label>
          <label>
            Salary:
            <input
              type="text"
              name="salary"
              value={val.salary}
              onChange={(e) => handleChange(e, i)}
              className="form-input"
            />
          </label>
          <button className="cancel-button" onClick={() => handleCancel(i)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}

export default App;
