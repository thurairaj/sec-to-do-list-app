import TaskForm from "../components/TaskForm.jsx";
import "./Home.css";

export default function Home({ stats, onAdd }) {
  return (
    <section className={"home"}>
      <h1> Dashboard </h1>
      <div className="stats-container">
        <p>
          Total <span>{stats.total}</span>
        </p>
        <p>
          Done <span>{stats.done}</span>
        </p>
        <p>
          Remaining <span>{stats.remaining}</span>
        </p>
      </div>

      <TaskForm onAdd={onAdd}></TaskForm>
    </section>
  );
}
