import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>User Management App</h1>
        <nav>
          <Link to="/">All Users</Link>
          <Link to="/add">Add User</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
