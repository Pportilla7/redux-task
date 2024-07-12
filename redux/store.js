import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './todosSlice';

// Estado inicial para la lista de tareas
const initialState = {
  todos: []
};

// Reducer que actualiza el estado
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'todos/removeTodo':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

// Crear el store de Redux
const store = createStore(reducer);

export default store;
