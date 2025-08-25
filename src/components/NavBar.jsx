import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <span className={"page-title"}>Task Tracker</span>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/tasks/"}>Tasks</NavLink>
    </nav>
  );
}
