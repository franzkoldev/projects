const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt (prompt ("Adivina el número secreto del 1 al 10"));

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto) {
    console.log("Felicidades adivinaste el número secreto")
} else if(numeroJugador > numeroSecreto) {
    console.log("El número es demasiado alto, intenta de nuevo")
} else {
    console.log("Es muy alto, intenta de nuevo")
}