import React, { useState } from "react";
import "./Tarea.css";

function Tarea(props) {
  const [tarea, setTarea] = useState("");
  console.log(tarea);
  const cambiarTarea = (event) => {
    setTarea(event.target.value);
  };

  const send = function (event) {
    event.preventDefault();
    const tareaNueva = {
      tarea: tarea,
    };
    props.tarea(tareaNueva);
  };

  return (
    <div className="primero">
      <form onSubmit={send}>
        <div class="mb-3">
          <label className="nota">Example textarea</label>
          <textarea
            className="tarea"
            rows="3"
            onChange={cambiarTarea}
          ></textarea>
        </div>
        <div>
          <button type="submit">send</button>
        </div>
      </form>
    </div>
  );
}

export default Tarea;