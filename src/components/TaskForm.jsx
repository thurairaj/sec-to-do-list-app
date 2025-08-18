import { Component, useEffect, useRef, useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [minutes, setMinutes] = useState(10);

  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  function reset() {
    setTitle("");
    setPriority("Medium");
    setMinutes(10);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!title.trim()) {
      return;
    }

    onAdd({
      id: Date.now(),
      title: title,
      priority: priority,
      minutes: minutes,
      done: false,
    });

    reset();
    titleRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit} className={"task-form"}>
      <div className={"input-container"}>
        <label>Title</label>
        <input
          ref={titleRef}
          placeholder="What will you do?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={"input-container"}>
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div className={"input-container"}>
        <label>Estimated Minutes</label>
        <input
          type={"number"}
          min={1}
          step={1}
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
