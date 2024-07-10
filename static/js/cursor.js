document.addEventListener('DOMContentLoaded', (event) => {
    const boton = document.getElementById('junkz'); // Obtener el elemento con el ID 'junkz'
    const textarea = document.getElementById('userInput'); // Obtener el textarea con el ID 'userInput'
    const pText = "Iniciando sesión\nCargando...\nCargando...\nSeleccione una opción...\n"; // Texto inicial del textarea

    let isWriting = false; // Variable para controlar si el texto está siendo escrito

    function typeWriter(message, callback) {
        let index = 0;

        function writeChar() {
            if (index < message.length) {
                textarea.value += message.charAt(index); // Agregar el siguiente carácter del mensaje al textarea
                index++; // Incrementar el índice
                textarea.scrollTop = textarea.scrollHeight; // Deslizar el textarea hacia abajo
                setTimeout(writeChar, 100); // Llamar a writeChar nuevamente después de 100 ms
            } else {
                if (callback) callback(); // Llamar al callback si está definido
            }
        }

        writeChar();
    }

    // Escribir el texto inicial cuando se carga la página
    typeWriter(pText, function() {
        // Habilitar el botón después de que el texto inicial se haya escrito
        boton.addEventListener('click', function() {
            if (isWriting) return; // Si el texto está siendo escrito, no hacer nada al hacer clic

            isWriting = true; // Establecer la variable isWriting a true

            typeWriter('Esto es Junkz!\n', function() {
                isWriting = false; // Establecer la variable isWriting a false cuando se completa el mensaje
            });

            textarea.focus(); // Mantener el enfoque en el textarea
        });
    });

    textarea.focus(); // Mantener el enfoque en el textarea
});