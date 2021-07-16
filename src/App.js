import React, { useState, useEffect } from "react";
import TaskBanner from "./componentes/TaskBanner";
import TaskRow from "./componentes/TaskRow";
import TaskCreator from "./componentes/TaskCreator";
import VisibilityContro from "./componentes/VisibilityControl";
import { v4 as uuidv4 } from "uuid";
function App() {
  const datosUsuario = [];

  const [showcompleted, setShowCompleted] = useState(true);

  const [userName, setUserName] = useState("Fazt");
  const [TaskItem, setTaskItem] = useState(datosUsuario);
  console.log(TaskItem);
  useEffect(() => {
    const datosUsuario = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((respose) => respose.json())
        .then((date) => {
          setTaskItem((oldDatos) => {
            return [date, ...oldDatos];
          });
        });
    };
    datosUsuario();
  }, []);

  const toggleTask = (task) =>
    setTaskItem(
      TaskItem.map((t) =>
        t.title === task.title ? { ...t, completed: !t.completed } : t
      )
    );

  const taskTableRows = (doneVale) =>
    TaskItem.filter((task) => task.completed === doneVale).map((task) => (
      <TaskRow
        deletask={deleTask}
        task={task}
        key={task.title}
        toggleTask={toggleTask}
      />
    ));

  const createNewTask = (taskName) => {
    if (!TaskItem.find((t) => t.title === taskName)) {
      setTaskItem([
        ...TaskItem,
        { title: taskName, completed: false, userId: uuidv4() },
      ]);
    }
  };

  const deleTask = (id) => {
    setTaskItem(TaskItem.filter((task) => task.userId !== id));
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

      <div>
        <VisibilityContro
          isChecked={showcompleted}
          callback={(checked) => setShowCompleted(checked)}
        />
      </div>

      {showcompleted && (
        <div className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </div>
      )}
    </div>
  );
}

export default App;

