import "./App.css";
import NuevaTarea from "./Tareas_pendientes/NuevaTarea";

function App() {
  const tareasUsuario = {
    tarea: "complementar trabajo",
  };
  return (
    <div className="App">
      <NuevaTarea />
    </div>
  );
}

export default App;