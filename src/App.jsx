import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import useLocalStorage from "./hooks/useLocakStorage.js";

function App() {
  const [tasks, setTasks] = useLocalStorage("task-tracker-thurai", []);

  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }

  return (
    <main>
      <h1>Task Tracker</h1>
      <p>Build: form → list → ui effect → polish to be prod ready</p>
      <TaskForm onAdd={addTask}></TaskForm>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.priority} - {task.minutes} -{" "}
              {task.done ? "✅" : "🔄"}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
