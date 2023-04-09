import styles from "./Forms.module.css";
import classNames from "classnames";
import { useState } from "react";

const FormAddNewTask = ({ addNewTask, setFormVisible }) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      addNewTask(values.title, values.description);
      setFormVisible(false);
    } else {
      setError("The title field is required!");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="taskTitle">Title *</label>
      <input
        className={styles.input}
        id="taskTitle"
        name="title"
        type="text"
        placeholder="Enter task title"
        value={values.title}
        onChange={handleChange}
        required
        aria-label="Task title"
      />
      <label htmlFor="taskDescription">Description</label>
      <textarea
        className={classNames(styles.input, styles.textarea)}
        id="taskDescription"
        name="description"
        placeholder="Enter task description"
        value={values.description}
        onChange={handleChange}
        aria-label="Task description"
      />
      <button className={styles.submit} type="submit" aria-label="Submit task">
        Submit
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default FormAddNewTask;