import "./TaskItem.css";
import { NavLink } from "react-router-dom";

export default function TaskItem({ task, onToggle, onDelete }) {
  function getPriority() {
    if (task.priority === "5") return "high";
    if (task.priority === "3") return "medium";
    if (task.priority === "1") return "low";
  }
  return (
    <div>
      <div
        className={"task-item " + (task.done ? "done " : " ") + getPriority()}
      >
        <NavLink to={"/task/" + task.id} className={"title"}>
          <span>{task.title}</span>
        </NavLink>
        <span
          onClick={() => onToggle(task.id)}
          className={"priority " + getPriority()}
        >
          {task.minutes}
        </span>
        <span onClick={() => onDelete(task.id)}>Delete</span>
      </div>
    </div>
  );
}
