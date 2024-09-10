import { useState, useEffect, createContext } from "react";

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const TasksContext = createContext({} as TasksContextData);

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);
  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    if (!tasksOnLocalStorage) return;
    setTasks(JSON.parse(tasksOnLocalStorage));
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
