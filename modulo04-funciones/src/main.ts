import './style.css'

const turnHandle = (function () {
  let turn = 0;

  const increment = () => turn += 1

  const decrement = () => (turn <= 0) ? 0 : turn += - 1

  const reset = () => turn = 0

  const changeTurn = (turnValue: number) => turn = turnValue

  const getTurn = () => turnElement.innerHTML = String(turn).padStart(2, '0')

  return {
    increment,
    decrement,
    reset,
    changeTurn,
    getTurn
  };
})();

document.getElementById("nextBtn")?.addEventListener("click", () => {
  turnHandle.increment()
  turnHandle.getTurn()
})

document.getElementById("prevBtn")?.addEventListener("click", () => {
  turnHandle.decrement()
  turnHandle.getTurn()
})

document.getElementById("resetBtn")?.addEventListener("click", () => {
  turnHandle.reset()
  turnHandle.getTurn()
})

const turnElement = document.getElementsByClassName("numero-turno")[0]

// Avanzado : Cambiar Turno
const inputElement = document.getElementById("changeTurnValue") as HTMLInputElement
const form = document.getElementById("form")

form?.addEventListener("submit", (e) => {
  e.preventDefault()
  turnHandle.changeTurn(Number(inputElement?.value))
  turnHandle.getTurn()
})