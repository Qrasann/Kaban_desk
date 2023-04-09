import classes from "./Footer.module.css";
import { LIST_TYPES, LIST_COPY } from "../../config";

const Footer = (props) => {
  const { tasks } = props;

  const countTasksByStatus = (taskStatus) => {
    return tasks.filter((task) => task.status === taskStatus).length;
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.counts}>
        <div key="infoTasks" className={classes.count}>
          <div className={classes.count}>
            Active tasks: {countTasksByStatus(LIST_TYPES.BACKLOG)}
          </div>
          <div className={classes.count}>
            Finished tasks: {countTasksByStatus(LIST_TYPES.FINISHED)}
          </div>
        </div>
      </div>
      <div className={classes.copy}>
        Kanban board by <>&copy;Roman</>, <>&copy;2023</>
      </div>
    </footer>
  );
};

export default Footer;