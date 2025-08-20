import TaskForm from "./components/TaskForm.jsx";
import useLocalStorage from "./hooks/useLocakStorage.js";
import "./App.css";
import TaskItem from "./components/TaskItem.jsx";

function App() {
  const [tasks, setTasks] = useLocalStorage("tt", []);

  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) return { ...task, done: !task.done };
        return task;
      }),
    );
  }

  return (
    <main>
      <h1>Task Tracker</h1>
      <p>Build: form → list → ui effect → polish to be prod ready</p>
      <div className={"content"}>
        <TaskForm onAdd={addTask}></TaskForm>
        <div>
          {tasks.map((task) => {
            return <TaskItem key={task.id} task={task} onToggle={toggleTask} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
