import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((u) => u.id === id);
  const [updatedUser, setUpdatedUser] = useState(user || { id: '', name: '', email: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updatedUser));
    navigate('/');
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedUser.id}
        disabled
      />
      <input
        type="text"
        placeholder="Name"
        value={updatedUser.name}
        onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={updatedUser.email}
        onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
        required
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUser;
