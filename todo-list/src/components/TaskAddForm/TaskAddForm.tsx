import React, { FormEvent, useContext, useState, useRef } from "react";
import { TasksContext } from "../../context/TasksContext";

import styles from "./styles.module.scss";

export const TaskAddForm: React.FC = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("O título da tarefa deve conter mais de 2 caracteres.");
      if (inputTitleRef.current !== null) {
        inputTitleRef.current.focus();
      }
      return;
    }

    if (taskTitle.length >= 20) {
      alert("O título da tarefa deve conter menos de 20 caracteres.");
      if (inputTitleRef.current !== null) {
        inputTitleRef.current.focus();
      }
      return;
    }

    const newTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskTitle("");
  }

  return (
    <form onSubmit={handleSubmitAddTask} className={styles.taskAddForm}>
      <div>
        <label htmlFor="task-title">Adicionar Tarefa</label>
        <input
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
          type="text"
          id="task-title"
          placeholder="Título da Tarefa"
          ref={inputTitleRef}
        />
      </div>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};
