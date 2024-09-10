import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

import styles from "./styles.module.scss";

export const TasksList: React.FC = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, done: !task.done };
      }

      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function handleRemoveTask(taskId: number) {
    const removeTask = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(removeTask);
    localStorage.setItem("tasks", JSON.stringify(removeTask));
  }

  return (
    <ul className={styles.tasksListUl}>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <div>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => {
                  handleToggleTaskStatus(task.id);
                }}
                checked={task.done ? true : false}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`task-${task.id}`}
              >
                {task.title}
              </label>
            </div>
            <div>
              <button>Edit</button>
              <button
                onClick={() => {
                  handleRemoveTask(task.id);
                }}
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
