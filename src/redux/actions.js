import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from "./types";

export const addTodo = (content, id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: content,
    });
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: `${content} eklendi`,
    });
    setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION",
      });
    }, 2000);
  };
};

export const toggleTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: id,
    });
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const showNotification = (content) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: content,
  };
};

export const hideNotification = (content) => {
  return {
    type: HIDE_NOTIFICATION,
  };
};
