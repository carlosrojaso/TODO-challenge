import React from "react";

function TaskRow(props) {
  return (
    <tr key={props.task.title}>
      <td>{props.task.title}</td>
      <td>
        <input
          type="checkbox"
          checked={props.task.completed}
          onChange={() => props.toggleTask(props.task)}
        />
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            props.editRow(props.task)
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => props.deletask(props.task.userId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TaskRow;
