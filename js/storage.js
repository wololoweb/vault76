

const inputNombre = document.querySelectorAll("#nombre") 
const inputApellido = document.querySelectorAll("#apellido")
const inputEmail = document.querySelectorAll("#email")
const inputText = document.querySelectorAll("#text-area")

const btnEnviar = document.querySelector("#enviar")

const almacenarDatos = () => {
    if(inputNombre.value.trim() !== "") {localStorage.setItem("Nombre", inputNombre.value)}
    if(inputApellido.value.trim() !== "") {localStorage.setItem("Apellido", inputApellido.value)}
    if(inputEmail.value.trim() !== "") {localStorage.setItem("Email", inputEmail.value)}
    if(inputText.value.trim() !== "") {localStorage.setItem("Comentario", inputText.value)}
}

btnEnviar.addEventListener("click", almacenarDatos)