// NUMBER GUESSING GAME --- ZURI TRAINING (NODE JS)

const prompt = require("prompt-sync")({ sigint: true})

var name = prompt("Enter your username: ")
const init_range = 2   

// function to create a divide and give readability to the program
const divide = () => {
  console.log("====================")
}

// screen of options to start the game or restart the game after a wrong guess
const start_game = () => {
  divide()
  console.log("Do you want to start the guessing game?")
  divide()
  var choice = prompt("Enter (1) to start --- (0) to quit: ")
  if (choice == '1') return true
  return false
}

// number guessing function
const num_guess = range => {
  divide()
  console.log(`Welcome to my guessing game ${name}`)
  divide()
  const num1 = 1
  var points = 0
  var stages = 1
  var answer = Math.floor(Math.random() * range) + num1
  console.log(`STAGE ${stages}`)
  var guess = parseInt(prompt(`Guess a number between ${num1} and ${range}: `))
  while (answer == guess) {
    points++
    range++
    stages++
    var answer = Math.floor(Math.random() * range) + num1
    console.log(`STAGE ${stages}`)
    var guess = parseInt(prompt(`Guess a number between ${num1} and ${range}: `))
  }
  if (answer != guess) {
    divide()
    console.log("Game Over")
    console.log(`${name}, Your Score is ${points}`)
    divide()
    if (start_game()) num_guess(init_range)
    else {
      divide()
      console.log(`Thanks for playing, ${name} :)`)
      divide()
    }
  }
}

if (start_game()) num_guess(init_range)
else {
  divide()
  console.log(`Sad to see you leave, ${name} :(`)
  divide()
}