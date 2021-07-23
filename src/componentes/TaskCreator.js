import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  const createNewTask = (event) => {
    event.preventDefault();
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="my-1">
      <form action="" onSubmit={createNewTask}>
        <input
          type="text"
          className="form-control"
          value={newTaskName}
          onChange={updateNewTaskValue}
        />
        <button className="btn btn-primary mt-1" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskCreator;

