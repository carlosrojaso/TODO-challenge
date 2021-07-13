import React, { useState } from "react";
import TaskBanner from "./componentes/TaskBanner";
import TaskRow from "./componentes/TaskRow";
import TaskCreator from "./componentes/TaskCreator";

function App() {
  const [userName, setUserName] = useState("Fazt");
  const [TaskItem, setTaskItem] = useState([
    {
      name: "tarea uno",
      done: false,
    },
    {
      name: "tarea dos",
      done: false,
    },
    {
      name: "tarea tres",
      done: true,
    },
  ]);
  console.log(TaskItem);

  const toggleTask = (task) =>
    setTaskItem(
      TaskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = () =>
    TaskItem.map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));

  const createNewTask = (taskName) => {
    if (!TaskItem.find((t) => t.name === taskName)) {
      setTaskItem([...TaskItem, { name: taskName, done: false }]);
    }
  };

  return (
    <div className="App">
      <TaskBanner userName={userName} TaskItem={TaskItem}></TaskBanner>
      <TaskCreator callback={createNewTask}></TaskCreator>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(true)}</tbody>
      </table>
    </div>
  );
}

export default App;