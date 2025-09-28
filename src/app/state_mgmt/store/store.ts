import { counterReducer } from "../reducers/counter.reducer";
import { employeesReducer } from "../reducers/employee.reducer";
import { todoReducer } from "../reducers/todo.reducers";

export const myStore = {
  count: counterReducer, // few more reducers
  todoArr : todoReducer,
  employees : employeesReducer
}
