import TaskItem from "./TaskItem.jsx";
import "./TaskList.css";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task) => {
        console.log(task);
        return (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}
