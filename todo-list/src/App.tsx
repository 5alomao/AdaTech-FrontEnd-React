// import { useEffect, useState } from "react";
// import { Memoization } from "./components/Concepts/Memoization";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContext";
import "./styles/global.css";

export function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}
