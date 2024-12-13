       // Lógica del juego
       const randomNumber = Math.floor(Math.random() * 10) + 1; // Generar número aleatorio entre 1 y 10
       const submitButton = document.getElementById("submitGuess");
       const inputField = document.getElementById("guessInput");
       const messageDiv = document.getElementById("message");
       const contenedorDiv = document.getElementById("contenedor");
       
        // Función para hacer temblar el div
        function hacerTemblar() {
        contenedorDiv.classList.add("temblar");

        // Elimina la clase después de la animación
        setTimeout(() => {
            contenedorDiv.classList.remove("temblar");
        }, 500); // Debe coincidir con la duración en el CSS (0.5s)
    }  

        // Evento de clic
        submitButton.addEventListener("click", () => {
            const userGuess = parseInt(inputField.value);            

                if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
                    messageDiv.textContent = "Por favor, ingresa un número válido entre 1 y 10.";
                    messageDiv.style.color = "red";
                    hacerTemblar(); // Llama a la función para hacer temblar el contenedor              
                    return;               
                }

                if (userGuess === randomNumber) {
                    messageDiv.textContent = "¡Felicidades! Adivinaste el número.";
                    messageDiv.style.color = "green";
                } else if (userGuess < randomNumber) {
                    messageDiv.textContent = "El número es mayor. ¡Intenta de nuevo!";
                    messageDiv.style.color = "orange";
                    hacerTemblar(); // Llama a la función para hacer temblar el contenedor
                } else {
                    messageDiv.textContent = "El número es menor. ¡Intenta de nuevo!";
                    messageDiv.style.color = "orange";
                    hacerTemblar(); // Llama a la función para hacer temblar el contenedor
                }
            });