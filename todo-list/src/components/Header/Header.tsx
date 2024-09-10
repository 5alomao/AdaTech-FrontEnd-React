import { TasksContext } from "../../context/TasksContext";
import { StatsCard } from "../StatsCard/StatsCard";
import { useContext } from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) {
      return (total += 1);
    }
    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>
          <span>Bem-vindo, Salomão!</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPending} />
          <StatsCard title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
