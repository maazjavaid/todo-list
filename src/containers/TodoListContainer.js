import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "../components/TodoList";
import {
  removeTodoRequest,
  updateTodoRequest,
} from "../state/ducks/todos/todoSlice";

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      removeTodoRequest,
      updateTodoRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
