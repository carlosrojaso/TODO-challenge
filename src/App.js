import React, { useState, useEffect} from "react";
import TaskBanner from "./componentes/TaskBanner";
import TaskRow from "./componentes/TaskRow";
import TaskCreator from "./componentes/TaskCreator";

function App() {
  const datosUsuario = [
    {
      title: "tarea uno",
      completed: false,
    },
    {
      title: "tarea dos",
      completed: false,
    },
    {
      title: "tarea tres",
      completed: true,
    },
    //done
]

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
        });
    };
    datosUsuario();
  }, []);




  console.log(TaskItem);

  const toggleTask = (task) =>
    setTaskItem(
      TaskItem.map((t) => (t.title === task.title ? { ...t, completed: !t.completed } : t))
    );

  const taskTableRows = () =>
    TaskItem.map((task) => (
      <TaskRow task={task} key={task.title} toggleTask={toggleTask} />
    ));

  const createNewTask = (taskName) => {
    if (!TaskItem.find((t) => t.title === taskName)) {
   
      setTaskItem([...TaskItem, { title: taskName, completed: false }]);
      
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