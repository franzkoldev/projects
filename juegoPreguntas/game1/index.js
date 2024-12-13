const questions = [
    "Cual es tu comida favorita?",
    "Que harias si ganaras la loteria?",
    "Que te hace feliz?",
    "Cual es tu mayor logro?",
    "Que pais te gustaria visitar?",
    "Que pelicula haz visto mas veces?"
]
//Referencias al DOM
const questionElement = document.getElementById("question")
const nextButton = document.getElementById("nextQuestion")
//Funcion para traer pregunta aleatoria
function getRandomQuestion () {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex]
}
nextButton.addEventListener("click", () => {
    const newQuestion = getRandomQuestion ()
    questionElement.textContent = newQuestion
});