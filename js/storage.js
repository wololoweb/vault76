

const inputNombre = document.querySelector("#inputNombre") 
const inputApellido = document.querySelector("#inputApellido")
const inputEmail = document.querySelector("#inputEmail")
const inputText = document.querySelector("#inputText")

const btnEnviar = document.querySelector("button.button")


//////////*  ALMACENAR DATOS *//////////
const almacenarDatos = () => {
    if(inputNombre.value !== "") {localStorage.setItem("Nombre", inputNombre.value)}
    if(inputApellido.value !== "") {localStorage.setItem("Apellido", inputApellido.value)}
    if(inputEmail.value !== "") {localStorage.setItem("Email", inputEmail.value)}
    if(inputText.value !== "") {localStorage.setItem("Comentario", inputText.value)}
}

//////////*  RECUPERAR DATOS *//////////
const recuperarDatos = () => {
    if(localStorage.getItem("Nombre")){inputNombre.value = localStorage.getItem("Nombre")}
    if(localStorage.getItem("Apellido")){inputApellido.value = localStorage.getItem("Apellido")}
    if(localStorage.getItem("Email")){inputEmail.value = localStorage.getItem("Email")}
    
}

//////////* CUANDO SE CARGUE EL HTML RECUPERAR DATOS *//////////
document.addEventListener("DOMContentLoaded", recuperarDatos)

btnEnviar.addEventListener("click", almacenarDatos)


