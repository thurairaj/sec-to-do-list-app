import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      done: false,
      priority: "High",
      minutes: 20,
    },
    {
      id: 2,
      title: "Learn Forms",
      done: true,
      priority: "Medium",
      minutes: 10,
    },
  ]);

  return (
    <main>
      <h1>Task Tracker</h1>
      <p>Build: form → list → ui effect → polish to be prod ready</p>
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
