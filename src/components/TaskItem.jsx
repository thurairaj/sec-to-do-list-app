import "./TaskItem.css";

export default function TaskItem({ task, onToggle }) {
  function getPriority() {
    if (task.priority === "5") return "high";
    if (task.priority === "3") return "medium";
    if (task.priority === "1") return "low";
  }
  return (
    <div onClick={() => onToggle(task.id)}>
      <div className={"task-item " + (task.done ? "done" : "")}>
        <span className={"done-checkbox"}>{task.done ? "✅" : "☑️"}</span>

        <span className={"title"}>{task.title}</span>
        <span className={"priority " + getPriority()}>{task.minutes}</span>
      </div>
    </div>
  );
}
