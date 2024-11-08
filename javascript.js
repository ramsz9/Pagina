const botonAgregar = document.getElementById("boton-agregar-tarea");
const inputTarea = document.getElementById("entrada-nombre-tarea");
const inputFecha = document.getElementById("entrada-fecha-tarea");
const listaTareas = document.getElementById("lista-tareas");

botonAgregar.addEventListener("click", () => {
  const tarea = inputTarea.value;
  if (tarea === "") {
    alert("Debes escribir una tarea");
    return;
  }
  const nuevaTarea = document.createElement("li");
  const textoTarea = document.createTextNode(tarea);
  textoTarea.textContent = tarea + " - " + inputFecha.value + " ";
  nuevaTarea.appendChild(textoTarea);

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Terminar";
  botonBorrar.addEventListener("click", () => {
    nuevaTarea.remove();
  });

  nuevaTarea.appendChild(botonBorrar);
  listaTareas.appendChild(nuevaTarea);
  inputTarea.value = "";
  inputFecha.value = "";
});
