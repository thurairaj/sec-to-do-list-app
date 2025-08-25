import { memo } from "react";
import "./Toolbar.css";

function Toolbar({ search, setSearch, filter, setFilter }) {
  return (
    <section className="toolbar">
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value={"ALL"}>All</option>
        <option value={"DONE"}>Done</option>
        <option value={"TODO"}>Todo</option>
      </select>
    </section>
  );
}

export default memo(Toolbar);
