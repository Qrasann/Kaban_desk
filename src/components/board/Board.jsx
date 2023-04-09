import classes from "./Board.module.css";
import { LIST_TYPES, LIST_COPY } from "../../config";
import List from "../list/List";
import uniqid from "uniqid";

const Board = ({ tasks, setTasks }) => {
  const addNewTask = (title, description) => {
    const newTask = {
      id: uniqid(),
      title,
      description,
      created: new Date().toISOString(),
      status: LIST_TYPES.BACKLOG,
    };
    setTasks([...tasks, newTask]);
  };

  const renderLists = () => {
    return Object.values(LIST_TYPES).map((type) => (
      <List
        key={type}
        type={type}
        title={LIST_COPY[type]}
        tasks={tasks || []}
        addNewTask={addNewTask}
        setTasks={setTasks}
      />
    ));
  };

  return <div className={classes.board}>{renderLists()}</div>;
};

export default Board;