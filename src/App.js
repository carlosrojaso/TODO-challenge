import React, { useState, useEffect } from "react";
import TaskBanner from "./componentes/TaskBanner";
import TaskRow from "./componentes/TaskRow";
import TaskCreator from "./componentes/TaskCreator";
import VisibilityContro from "./componentes/VisibilityControl";
import { v4 as uuidv4 } from "uuid";
import EditTaks from "./componentes/EditTaks";
function App() {
  const datosUsuario = [];

  const [showcompleted, setShowCompleted] = useState(true);
  const [userName, setUserName] = useState("Fazt");
  const [TaskItem, setTaskItem] = useState(datosUsuario);

  useEffect(() => {
    const datosUsuario = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((respose) => respose.json())
        .then((date) => {
          setTaskItem((oldDatos) => {
            return [date, ...oldDatos];
          });
        })
        .catch((err) => console.log(err));
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
        setEditing={setEditing}
        editRow={editRow}
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

  const [editing, setEditing] = useState(false);

  const [currentTask, setcurrentTask] = useState({
    title: "",
    completed: "",
    userId: "",
  });
  console.log(currentTask);

  const editRow = (task) => {
    setEditing(true);
    setcurrentTask({
      title: task.title,
      completed: task.completed,
      userId: task.userId,
    });
  };

  const updateTask = (id, updatedUser) => {
    setEditing(false);
    setTaskItem(
      TaskItem.map((task) => (task.userId === id ? updatedUser : task))
    );
  };

  return (
    <div className="App">
      <TaskBanner userName={userName} TaskItem={TaskItem}></TaskBanner>
      {editing ? (
        <div>
          <h2>Edit Task</h2>
          <EditTaks currentTask={currentTask} updateTask={updateTask} />
        </div>
      ) : (
        <TaskCreator callback={createNewTask}></TaskCreator>
      )}

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
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </table>
      )}
    </div>
  );
}

export default App;
