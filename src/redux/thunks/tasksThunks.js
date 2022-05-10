import axios from "axios";
import { loadTasksActionCreator } from "../features/taskSlice";

export const loadTasksThunk = () => async (dispatch) => {
  const { data: tasks } = await axios.get(process.env.REACT_APP_API_URL);
  dispatch(loadTasksActionCreator(tasks));
};
