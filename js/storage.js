

const inputNombre = document.querySelector("#inputNombre") 
const inputApellido = document.querySelector("#inputApellido")
const inputEmail = document.querySelector("#inputEmail")
const inputText = document.querySelector("#inputText")

const btnEnviar = document.querySelector("button.button")

const almacenarDatos = () => {
    if(inputNombre.value !== "") {localStorage.setItem("Nombre", inputNombre.value)}
    if(inputApellido.value !== "") {localStorage.setItem("Apellido", inputApellido.value)}
    if(inputEmail.value !== "") {localStorage.setItem("Email", inputEmail.value)}
    if(inputText.value !== "") {localStorage.setItem("Comentario", inputText.value)}
}

btnEnviar.addEventListener("click", almacenarDatos)