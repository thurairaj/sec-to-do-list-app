import { NavLink, useParams } from "react-router-dom";

export default function TaskDetail({ tasks, toggleTask, deleteTask }) {
  const { id } = useParams();
  const task = tasks.find((task) => task.id.toString() === id.toString());
  console.log(task, tasks, id);
  if (!task) {
    return null;
  }

  return (
    <section>
      <NavLink to={"/tasks"}>
        <p>Back</p>
      </NavLink>
      <h2>Task #{id}</h2>
      <h3>{task.title}</h3>

      <p>Status: {task.done ? "Completed" : "In Progress"}</p>
      <div>
        <button onClick={() => toggleTask(task.id)}>
          Mark as {task.done ? "Open" : "Done"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete Task</button>
      </div>
    </section>
  );
}
