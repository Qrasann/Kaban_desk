import { Routes, Route } from "react-router-dom";
import Board from "../board/Board";
import TaskDetail from "../task-detail/TaskDetail";
import classes from "./Main.module.css";

const Main = ({ tasks, setTasks }) => {
  return (
    <main className={classes.main}>
      <Routes>
        <Route
          path="/"
          element={<Board tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/tasks/:taskId" element={<TaskDetail tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </main>
  );
};

export default Main;