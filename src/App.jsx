import TaskForm from "./components/TaskForm.jsx";
import useLocalStorage from "./hooks/useLocakStorage.js";
import "./App.css";
import { useCallback, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import TaskAll from "./pages/tasks/TaskAll.jsx";
import TasksActive from "./pages/tasks/TasksActive.jsx";
import TasksCompleted from "./pages/tasks/TasksCompleted.jsx";

function App() {
  const [tasks, setTasks] = useLocalStorage("aug25", []);

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((task) => task.done).length;
    return { total, done, remaining: total - done };
  }, [tasks]);

  const addTask = useCallback((task) => {
    setTasks((prev) => [...prev, task]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === id) return { ...task, done: !task.done };
          return task;
        }),
      );
    },
    [setTasks],
  );

  return (
    <main>
      <NavBar></NavBar>
      <div className={"content"}>
        <Routes>
          <Route
            path={"/"}
            element={<Home stats={stats} onAdd={addTask} />}
          ></Route>

          <Route
            path={"/tasks/*"}
            element={
              <Tasks
                tasks={tasks}
                toggleTask={toggleTask}
                addTask={addTask}
                deleteTask={deleteTask}
              />
            }
          >
            <Route index element={<TaskAll />}></Route>
            <Route path={"active"} element={<TasksActive />}></Route>
            <Route path={"completed"} element={<TasksCompleted />}></Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
