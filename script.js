const palabras = ['computador', 'mouse', 'televisor'];
const palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
const intentosMaximos = 5;

const palabraAdivinar = Array(palabraRandom.length).fill("_");
const wordDisplay = document.getElementById("wordDisplay");
const guessesDisplay = document.getElementById("guesses");
const remainingLivesDisplay = document.getElementById("remainingLives");   //constantes que hacen referencia a elementos html de la pagina  
const inputLetter = document.getElementById("inputLetter");
const guessButton = document.getElementById("guessButton");

wordDisplay.textContent = palabraAdivinar.join(" ");               
remainingLivesDisplay.textContent = `Vidas restantes: ${intentosMaximos}`;  //Establecen el contenido de los elementos HTML para mostrar la palabra a adivinar y las vidas 

let vidasRestantes = intentosMaximos;
const letrasAdivinadas = [];

guessButton.addEventListener("click", () => {  // Agrega un evento de clic al botón de adivinanza para manejar las adivinanzas del jugador
  const letra = inputLetter.value.toLowerCase();

  if (letrasAdivinadas.includes(letra)) {
    alert("Ya has adivinado esta letra antes.");
    return;
  }

  letrasAdivinadas.push(letra);

  let aciertos = false;
  for (let i = 0; i < palabraRandom.length; i++) {
    if (palabraRandom[i] === letra) {
      palabraAdivinar[i] = letra;
      aciertos = true;
    }
  }

  wordDisplay.textContent = palabraAdivinar.join(" ");

  if (!aciertos) {
    vidasRestantes--;
    remainingLivesDisplay.textContent = `Vidas restantes: ${vidasRestantes}`;
    if (vidasRestantes === 0) {
      alert(`Se te acabaron las vidas. La palabra era: ${palabraRandom}`);
      resetGame();
    }
  }

  if (palabraAdivinar.join("") === palabraRandom) {
    alert(`¡Has completado la palabra! Era: ${palabraRandom}`);
    resetGame();
  }

  inputLetter.value = "";
});

function resetGame() {
  letrasAdivinadas.length = 0;
  vidasRestantes = intentosMaximos;
  palabraAdivinar.fill("_");
  wordDisplay.textContent = palabraAdivinar.join(" ");
  guessesDisplay.textContent = "";
  remainingLivesDisplay.textContent = `Vidas restantes: ${intentosMaximos}`;
}
