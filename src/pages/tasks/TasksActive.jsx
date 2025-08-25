import { useOutletContext } from "react-router-dom";
import TaskList from "../../components/TaskList.jsx";

export default function TasksActive() {
  const { tasks, toggleTask, deleteTask } = useOutletContext();
  const filtered = tasks.filter((task) => !task.done);
  return (
    <TaskList tasks={filtered} onToggle={toggleTask} onDelete={deleteTask} />
  );
}
