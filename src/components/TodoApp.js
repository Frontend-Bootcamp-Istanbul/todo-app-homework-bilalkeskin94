import React from "react";
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <TodoAppHeader />
        <TodoAppList />
      </div>
    );
  }
}
export default TodoApp;
