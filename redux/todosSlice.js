export const addTodo = (todo) => ({
    type: 'todos/addTodo',
    payload: todo
  });
  
  export const removeTodo = (index) => ({
    type: 'todos/removeTodo',
    payload: index
  });
  
  const todosReducer = (state = [], action) => {
    switch (action.type) {
      case 'todos/addTodo':
        return [...state, action.payload];
      case 'todos/removeTodo':
        return state.filter((todo, idx) => idx !== action.payload);
      default:
        return state;
    }
  };
  
  export default todosReducer;
  