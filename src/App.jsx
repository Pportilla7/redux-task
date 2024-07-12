import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../redux/todosSlice';

const App = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Agregar Tarea</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
