import React from "react";
import TodoForm from "./todoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
function TodoList() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={String(new Date().getUTCMilliseconds()) + todo} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;