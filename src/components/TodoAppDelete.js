import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";
const TodoAppDelete = (props) => {
  const { id, deleteTodo } = props;
  console.log(id);
  return (
    <div>
      <button
        onClick={() => {
          deleteTodo(id);
          console.log(id);
        }}
      >
        Sil
      </button>
    </div>
  );
};
const mapDispatchToProps = {
  deleteTodo: deleteTodo,
};
export default connect(null, mapDispatchToProps)(TodoAppDelete);
