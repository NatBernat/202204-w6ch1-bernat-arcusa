import { useDispatch } from "react-redux";
import {
  editTaskActionCreator,
  removeTaskActionCreator,
  updateTaskActionCreator,
} from "../../redux/features/taskSlice";
import styled from "styled-components";

const StyledTaskComponent = styled.div`
  margin: 30px;
  border-radius: 20px;
  padding: 20px;
  background-color: lightgreen;
  ul {
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    padding: 10px;
  }
`;

const Task = ({ task: { id, name, done }, inputValue }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(removeTaskActionCreator(id));
  };

  const updateTask = () => {
    dispatch(updateTaskActionCreator(id));
  };

  const editTask = () => {
    dispatch(editTaskActionCreator());
  };

  return (
    <StyledTaskComponent>
      <ul>
        <li>id: {id}</li>
        <li>Task name: {name}</li>
        <li>Task status: {done ? "Done!" : "Pending"}</li>
      </ul>
      <div>
        <button onClick={updateTask}>Mark as done</button>
        <button onClick={editTask}>Edit</button>
        <button onClick={removeTask}>Remove</button>
      </div>
    </StyledTaskComponent>
  );
};

export default Task;
