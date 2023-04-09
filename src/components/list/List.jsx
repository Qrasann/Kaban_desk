import { useState } from "react";
import { Link } from "react-router-dom";
import FormAddNewTask from "../forms/FormAddNewTask";
import { LIST_TYPES } from "../../config";
import uniqid from "uniqid";

import classes from "./List.module.css";

const List = ({ title, type, tasks, addNewTask, setTasks }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClick = () => setFormVisible(!isFormVisible);

  const handleDelete = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const getCurrentListTasks = (listType) =>
    tasks.filter((task) => task.status === listType);

  const getPreviousStateTasks = (listType) => {
    switch (listType) {
      case LIST_TYPES.READY:
        return tasks.filter((task) => task.status === LIST_TYPES.BACKLOG);
      case LIST_TYPES.IN_PROGRESS:
        return tasks.filter((task) => task.status === LIST_TYPES.READY);
      case LIST_TYPES.FINISHED:
        return tasks.filter((task) => task.status === LIST_TYPES.IN_PROGRESS);
      default:
        return [];
    }
  };

  const onTaskSelected = (event) => {
    const taskId = event.target.value;
    const findedTask = tasks.find((task) => task.id === taskId);
    findedTask.status = type;
    setFormVisible(false);
    setTasks([...tasks]);
  };

  const renderAddButton = () => {
    const isBacklog = type === LIST_TYPES.BACKLOG;
    const hasPreviousStateTasks = getPreviousStateTasks(type).length > 0;

    const addButtonLabel = "+ Add card";

    if (!isFormVisible) {
      return (
        <button
          className={classes.addButton}
          disabled={!isBacklog && !hasPreviousStateTasks}
          onClick={handleClick}
        >
          {addButtonLabel}
        </button>
      );
    }
  };

  const renderTaskList = () =>
    getCurrentListTasks(type).map((task) => (
      <Link key={`${task.id}-link`} to={`/tasks/${task.id}`} className={classes.taskLink}>
        <div key={task.id} className={classes.task}>
          {task.title}
        </div>
      </Link>
    ));

  const renderForm = () => {
    const isBacklog = type === LIST_TYPES.BACKLOG;

    if (isBacklog && isFormVisible) {
      return <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />;
    } else if (!isBacklog && isFormVisible) {
      return (
        <select onChange={onTaskSelected} className={classes.selectTask}>
          <option key={uniqid()} value="optionsState" className={classes.optionTask}>
            Please select a task here
          </option>
          {getPreviousStateTasks(type).map((task) => (
            <option key={task.id} value={task.id}>
              {task.title}
            </option>
          ))}
        </select>
      );
    }
  };

  return (
    <div className={classes.list}>
      <h2 className={classes.listTitle}>{title}</h2>
      <div className={classes.listWrapper}>
        {renderTaskList()}
        {renderAddButton()}
        {renderForm()}
      </div>
    </div>
  );
};

export default List;