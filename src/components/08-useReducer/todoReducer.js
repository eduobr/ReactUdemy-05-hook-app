export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      //no se hace la sintaxis anterior ya que filter regresa un nuevo arreglo
      return state.filter((todo) => todo.id !== action.payload);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "toggle-old":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          //debemos regresar algo ya que si no va a transformar
          //el todo en un undefined
          return todo;
        }
      });
    default:
      return state;
  }
};
