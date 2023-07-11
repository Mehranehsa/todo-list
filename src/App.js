import React, { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <div className="bg-white rounded-lg border border-gray-400 shadow-lg p-4 mb-4 flex items-center">
          <input
            type="text"
            placeholder="Add todo"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="flex-grow outline-none"
          />
          <button
            className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-lg"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="bg-white rounded-lg border border-gray-400 shadow-lg p-4">
          {todos.map((todo, index) => (
            <li key={index} className="mb-2">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;