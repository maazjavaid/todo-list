import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Todos from "../components/Todos";
import { addTodoRequest } from "../state/ducks/todos/todoSlice";

const mapStateToProps = (state) => {
  return {
    loading: state.todos.loading,
    error: state.todos.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodoRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
