import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";
import TodoAppDelete from "./TodoAppDelete";
import styled from "styled-components";

const StyledListItem = styled.div`
  background: black;
  color: #fff;
  padding: 10px;
`;
const TodoAppListItem = ({ content, id, completed, toggleTodo }) => {
  return (
    <div
      style={{
        textDecoration: completed ? "line-through" : "initial",
      }}
      onClick={() => toggleTodo(id)}
    >


      {content}
      <TodoAppDelete id={id} />
    </div>
  );
};

const mapDispatchToProps = {
  toggleTodo: toggleTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppListItem);
