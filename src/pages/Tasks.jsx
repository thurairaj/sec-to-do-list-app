import "../components/TaskList.css";
import { NavLink, Outlet } from "react-router-dom";
import "./Tasks.css";

export default function Tasks({ tasks, toggleTask, addTask, deleteTask }) {
  const linkClass = ({ isActive }) => {
    return isActive ? "isActive" : "";
  };

  return (
    <div className="tasks">
      {/*<TaskForm onAdd={addTask}></TaskForm>*/}

      <div className="vertical-bar">
        <h3>Tasks</h3>
        <NavLink to={"/tasks/"} end className={linkClass}>
          All
        </NavLink>
        <NavLink to={"/tasks/active"} className={linkClass}>
          Active
        </NavLink>
        <NavLink to={"/tasks/completed"} className={linkClass}>
          Completed
        </NavLink>
      </div>

      <div className={"list-content"}>
        <Outlet context={{ tasks, toggleTask, addTask, deleteTask }} />
      </div>
    </div>
  );
}
