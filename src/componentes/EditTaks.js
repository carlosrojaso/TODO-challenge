import React, { useState } from "react";

export const EditTaks = (props) => {
  console.log(props.currentTask);
  const [newTaskName, setNewTaskName] = useState(props.currentTask.title);

  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  const createNewTask = (event) => {
    event.preventDefault();
    const edit = {
      newTaskName: newTaskName,
    };
    props.updateTask(props.currentTask.userId, edit);
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
          Edit task
        </button>
      </form>
    </div>
  );
};

export default EditTaks;
