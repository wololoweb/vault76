

const inputNombre = document.querySelectorAll("#inputNombre") 
const inputApellido = document.querySelectorAll("#inputApellido")
const inputEmail = document.querySelectorAll("#inputEmail")
const inputText = document.querySelectorAll("#inputText")

const btnEnviar = document.querySelector("button.button")

const almacenarDatos = () => {
    if(inputNombre.value !== "") {localStorage.setItem("Nombre", inputNombre.value)}
    if(inputApellido.value !== "") {localStorage.setItem("Apellido", inputApellido.value)}
    if(inputEmail.value !== "") {localStorage.setItem("Email", inputEmail.value)}
    if(inputText.value !== "") {localStorage.setItem("Comentario", inputText.value)}
}

btnEnviar.addEventListener("click", almacenarDatos)