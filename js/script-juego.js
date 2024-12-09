// Creo un Array de questions con 3 elemntos cada uno, la pregunta en si, 3 opciones, y al final agrego la opcion correcta en un valor entre 0 y 2.
const questions = [
  {
    question: "¿Cuál es el habitat del UE-02 Pheromosa?",
    options: ["Ultrabosque", "Ultradesierto", "Ultropolis"],
    answer: 1
  },
  {
    question: "¿Cuál es el metodo de cotencion creado para los Ultraentes?",
    options: ["El repelente", "La Enteball", "la Ultraball"],
    answer: 1
  },
  {
    question: "¿Cuales son los tipos elementales del UE-04 Kartana?",
    options: ["Roca Veneno", "Planta Acero", "Bicho Lucha"],
    answer: 1
  },
  {
    question: "¿Quién es la jefa de la fundacion Æther?",
    options: ["Samina", "Polo", "Sabrina"],
    answer: 0
  },
  {
    question: "¿Cuál es la region en la que aparecieron los Ultraentes?",
    options: ["Galar", "Kalos", "Alola"],
    answer: 2
  }
];

// declaro variables como los puntos que va adquiriendo el jugador, el nombre de dicho jugador y el numero de preunta por la que va.

let currentQuestion = 0;
let score = 0;
let playerName = "";

// con el addeventlistener y el documentgetbyid tomo los elementos del DOM para anclarlos a mis constantes de mismo nombre.

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");
  const gameDiv = document.getElementById("game");
  const quizDiv = document.getElementById("quiz");
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const resultDiv = document.getElementById("result");
  const finalMessageDiv = document.getElementById("finalMessage");
  const playerNameInput = document.getElementById("playerName");

// al hacer click en e boton de start se ejecuta el trim para evitar que la persona ponga espacios antes de su nombre o despues.
// y tmbn un alert en caso de que no haya puesto ningun valor
// cuando lo del nombre se cumple lo que hace es empezar a mostrar as preguntas, removiendo el espacio que ocupaba el gamediv agregandole la class hidden.

  startButton.addEventListener("click", () => {
    playerName = playerNameInput.value.trim();
    if (playerName === "") {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
    gameDiv.classList.add("hidden");
    quizDiv.classList.remove("hidden");
    showQuestion();
  });

// funcion para anclar el click a la funcion de restartgame.

  restartButton.addEventListener("click", restartGame);

// la funcion que muestra las preguntas, verificando el numero de la pregunta en el momento y si es menor al valor total del array.
// usando el foreach realizo la funcion de buscar en el array las opciones y crear un boton con cada una y despues al hacer cick en una de esas se verifica con el checkanswer.
// para despues crear un elemento hijo, que sea un boton.

  function showQuestion() {
    if (currentQuestion < questions.length) {
      const questionData = questions[currentQuestion];
      questionDiv.textContent = questionData.question;
      optionsDiv.innerHTML = "";
      questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsDiv.appendChild(button);
      });
    } else {
      endGame();
    }
  }

// si selecciono la respuesta correcta se le suma un valor a mi score y si no se suma uno al currentquestion y se sigue mostrando la siguiente pregunta.

  function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    showQuestion();
  }

// la funcion de endgame se invoca al momento en el que la pregunta del momento iguala o supera el valor del lenght del array y hace aparecer un mensaje e imagen si la persona llego a los 5 puntos, pero si no le aparce otro msj sin imagen.

  function endGame() {
    quizDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
    if (score === 5) {
      finalMessageDiv.innerHTML = `<h1>¡Felicidades ${playerName}, eres un Ultraguardian honorario!</h1>`;
      hiddenImage.classList.remove("hidden");
    } else {
      finalMessageDiv.innerHTML = `Lo lamento ${playerName}, obtuviste ${score} puntos. ¡Intenta nuevamente!`;
    }
  }

// se reinicia todo el juego y todo vuelve a su estado originas de display none y los valores se resetean.

  function restartGame() {
    currentQuestion = 0;
    score = 0;
    playerName = "";
    playerNameInput.value = "";
    hiddenImage.classList.add("hidden");
    gameDiv.classList.remove("hidden");
    quizDiv.classList.add("hidden");
    resultDiv.classList.add("hidden");
  }
});
