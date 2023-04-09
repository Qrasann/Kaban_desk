import { useParams, Link } from "react-router-dom";
import classes from "./TaskDetail.module.css";
import CloseIcon from "../../assets/img/close.png";

const TaskDetail = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === taskId);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h2 className={classes.title}>{task.title}</h2>
        <Link to="/">
          <button className={classes.buttonClose}>
            <img src={CloseIcon} alt="close task detail" />
          </button>
        </Link>
      </div>
      <p className={classes.taskDescription}>
        Description: {task.description || "This task has no description"}
      </p>
    </div>
  );
};

export default TaskDetail;