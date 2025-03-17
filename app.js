// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el campo de texto donde el usuario escribe el nombre
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final
    
    // Verificar si el usuario ingresó un nombre
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido."); // Mostrar una alerta si el campo está vacío
        return; // Salir de la función para no continuar
    }
    
    // Obtener la lista donde se mostrarán los nombres
    let lista = document.getElementById("listaAmigos");
    
    // Crear un nuevo elemento de lista <li>
    let li = document.createElement("li");
    li.textContent = nombre; // Asignar el nombre al nuevo elemento
    
    // Agregar el nuevo nombre a la lista en la página
    lista.appendChild(li);
    
    // Limpiar el campo de entrada después de agregar el nombre
    input.value = "";
}

// Función para seleccionar un amigo secreto de la lista
function sortearAmigo() {
    // Obtener todos los elementos <li> dentro de la lista
    let lista = document.getElementById("listaAmigos").getElementsByTagName("li");
    
    // Verificar si hay nombres en la lista antes de hacer el sorteo
    if (lista.length === 0) {
        alert("No hay nombres en la lista para sortear."); // Mostrar una alerta si la lista está vacía
        return; // Salir de la función
    }
    
    // Escoger un número aleatorio basado en la cantidad de nombres en la lista
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    
    // Obtener el nombre seleccionado de la lista
    let amigoSecreto = lista[indiceAleatorio].textContent;
    
    // Mostrar el resultado en la página dentro de la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>Amigo secreto: " + amigoSecreto + "</li>";
}