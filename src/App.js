import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import toDos from "./data/toDos";
import { loadTasksActionCreator } from "./redux/features/taskSlice";
import TasksList from "./components/TasksList/TasksList";
import Form from "./components/Form/Form";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksActionCreator(toDos));
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
