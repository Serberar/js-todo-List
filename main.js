//selecciono las partes del html que utilizare
let boton = document.querySelector("button");
input$$ = document.querySelector("input");
vacio = document.querySelector("p");
//creo la variable donde almacenare los datos
valorInput = [];
//creo una funcion que almacene el valor de input y la almacene en valorInput
const crear = () => {
  let valor = input$$.value;
  valorInput.push(valor);
  input$$.value = "";
  //creo las etiquetas de lista y un boton para eliminar los datos del array valorinput
  let li$$ = document.createElement("li");
  let botonEliminar = document.createElement("button");
  botonEliminar.className= "btn-delete"
  let ul$$ = document.querySelector("ul");
  //meto lo que he creado en el html
  ul$$.appendChild(li$$);
  li$$.textContent = valorInput[valorInput.length - 1];
  li$$.appendChild(botonEliminar);
  //pongo un escuchador de eventos para que cuando haga click elimine un li
  botonEliminar.addEventListener("click", () => {
    li$$.remove();
    //añado un splice para que cuando elimine datos en la lista tambien me los borre del aray
    valorInput.splice(valorInput.indexOf(valor),1);
    //si el valor del array es 0 muestra el mensaje si no lo esconde
    if (valorInput.length === 0) {
      vacio.style.display = "block";
    }})
    if (valorInput.length > 0) {
      vacio.style.display = "none";
    } 
}
//añado un escuchador de eventos para que cuando haga click llame a la funcion crear
boton.addEventListener("click", () => crear());
