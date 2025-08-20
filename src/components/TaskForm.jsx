import { Component, useEffect, useRef, useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("3");
  const [minutes, setMinutes] = useState("");
  const [errors, setErrors] = useState({});

  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    validate();
  }, [title, minutes]);

  function reset() {
    setTitle("");
    setPriority("Medium");
    setMinutes(10);
  }

  function validate() {
    const error = {};
    let isSuccess = true;
    if (!title.trim()) {
      error.title = "Title is required";
      isSuccess = false;
    }

    if (isNaN(parseInt(minutes))) {
      error.minutes = "Must be number";
      isSuccess = false;
    } else if (Number(minutes) < 3) {
      error.minutes = "Must be at least 3 minutes";
      isSuccess = false;
    }

    setErrors(error);
    return isSuccess;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    onAdd({
      id: Date.now(),
      title: title,
      priority: priority,
      minutes: parseInt(minutes),
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {errors.title && <small>{errors.title}</small>}
      </div>
      <div className={"input-container"}>
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value={"5"}>High</option>
          <option value={"3"}>Medium</option>
          <option value={"1"}>Low</option>
        </select>
      </div>
      <div className={"input-container"}>
        <label>Estimated Minutes</label>
        <input
          type={"text"}
          value={minutes}
          onChange={(e) => {
            setMinutes(e.target.value);
          }}
        />
        {errors.minutes && <small>{errors.minutes}</small>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
