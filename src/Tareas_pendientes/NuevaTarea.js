import Tarea from "./Tarea";

function NuevaTarea() {
  const tareaNueva = (nueva) => {
    const tarea = {
      ...nueva,
    };
    console.log(tarea);
  };
  return (
    <div>
      <Tarea tarea={tareaNueva}></Tarea>
    </div>
  );
}

export default NuevaTarea;