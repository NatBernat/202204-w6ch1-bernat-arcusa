import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TasksList from "./components/TasksList/TasksList";
import Form from "./components/Form/Form";
import { loadTasksThunk } from "./redux/thunks/tasksThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>To-do list</h1>
      <Form />
      <TasksList />
    </div>
  );
}

export default App;
