import { useOutletContext } from "react-router-dom";
import TaskList from "../../components/TaskList.jsx";
import TaskForm from "../../components/TaskForm.jsx";

export default function TaskAll() {
  const { tasks, addTask, toggleTask, deleteTask } = useOutletContext();
  return (
    <div>
      {tasks.length === 0 && <TaskForm onAdd={addTask}></TaskForm>}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}
