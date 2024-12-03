import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add_todo, Delete_todo, View_todo, Clear_all_todos } from '../Redux/action/TodoAction';
import { FaTrash, FaPlus } from 'react-icons/fa';

const Add = () => {
  const [list, setList] = useState('');
  const dispatch = useDispatch();

  const AllTodos = useSelector((state) => state.todo.TodoList);

  useEffect(() => {
    dispatch(View_todo());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list) {
      alert('Please enter a Todo item!');
      return;
    }
    const obj = {
      id: Date.now(), // Temporary ID for this example
      list,
    };
    dispatch(Add_todo(obj));
    setList('');
  };

  const handleDelete = (id) => {
    dispatch(Delete_todo(id));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all Todos?')) {
      dispatch(Clear_all_todos());
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Todo List</h1>
      </div>

      {/* Input Form */}
      <div className="mb-4">
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Add a new task..."
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <FaPlus /> Add
          </button>
        </form>
      </div>

      {/* Todo List */}
      <div className="row">
        {AllTodos.length > 0 ? (
          AllTodos.map((todo) => (
            <div key={todo.id} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{todo.list}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(todo.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No tasks available. Add a new one!</p>
          </div>
        )}
      </div>

      {/* Clear All Button */}
      {AllTodos.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-danger" onClick={handleClearAll}>
            Clear All Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default Add;
Z