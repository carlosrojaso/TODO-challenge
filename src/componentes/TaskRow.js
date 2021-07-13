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
    </tr>
  );
}

export default TaskRow;