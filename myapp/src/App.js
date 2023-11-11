import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-items">
        {todos.map((todo, index) => (
          <li key={index} style={{fontSize:'1rem',fontWeight:'bold'}}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .todo-container {
          max-width: 400px;
          margin: 100px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .input-container {
          display: flex;
          margin-bottom: 10px;
        }
        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-right: 10px;
        }
        button {
          padding: 8px 12px;
          border: none;
          background: #2979ff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background: #1c54b2;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }
        li:nth-child(odd) {
          background: #f4f4f4;
        }
      `}</style>
    </div>
  );
};

export default App;
