const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score")
  },
  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 60,
  },
  actions: {
    timeId:setInterval(randomSquare, 1000),
    //null,
    countDowmTimeId:setInterval(countDowm, 1000),
  }

}
function countDowm() {
  state.values.currentTime--
  state.view.timeLeft.textContent = state.values.currentTime

  if(state.values.currentTime <= 0) {
    alert("Game Over! O seu resultado foi: " + state.values.result)
  }
}

function randomSquare() {
  state.view.squares.forEach((square)=> {
    square.classList.remove("enemy")
  })

  let ramdomNumber = Math.floor(Math.random()* 9)
  let randomSquare = state.view.squares[ramdomNumber]
  randomSquare.classList.add("enemy")
  state.values.hitPosition = randomSquare.id
}
// function moveEnemy() {
//   state.values.timeId = setInterval(randomSquare, state.values.gameVelocity)
// }

function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if(square.id === state.values.hitPosition) {
        state.values.result++
        state.view.score.textContent = state.values.result
        state.values.hitPosition = null
      }
    })
  })
}

function initialize() {
  // moveEnemy()
  addListenerHitBox()
}

initialize();