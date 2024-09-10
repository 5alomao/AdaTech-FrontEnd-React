import styles from "./styles.module.scss";
import { TaskAddForm } from "../TaskAddForm/TaskAddForm";
import { TasksList } from "../TasksList/TasksList";

export const Tasks: React.FC = () => {
  return (
    <section className={styles.container}>
      <TaskAddForm />
      <TasksList />
    </section>
  );
};
