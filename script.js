var userInput = window.prompt('Let\'s play Rock-paper-scissors, R for Rock, P for paper and S for scissors. Please make your choice.')
userInput = userInput.toUpperCase()
var randomOutput
window.alert('Your chorce is ' + userInput)

if (userInput === null || userInput === undefined) {
  window.alert('Looks like you make a invalid choice.')
} else {
  if (userInput === 'R') {
    var random = Math.random()
    if (random > 0 && random < 0.33) {
      randomOutput = 'R'
    } else if (random > 0.33 && random < 0.66) {
      randomOutput = 'P'
    } else if (random > 0.66 && random < 1) {
      randomOutput = 'S'
    }
    window.alert('My choice is ' + randomOutput)
    if (userInput === randomOutput) {
      window.alert('It\'s a tie. Nice try.')
    } else if (randomOutput === 'P') {
      window.alert('Sorry, I got you. Loser.')
    } else if (randomOutput === 'S') {
      window.alert('OK, you got me. I lose.')
    }
  } else if (userInput === 'P') {
    random = Math.random()
    if (random > 0 && random < 0.33) {
      randomOutput = 'R'
    } else if (random > 0.33 && random < 0.66) {
      randomOutput = 'P'
    } else if (random > 0.66 && random < 1) {
      randomOutput = 'S'
    }
    window.alert('My choice is ' + randomOutput)
    if (userInput === randomOutput) {
      window.alert('It\'s a tie. Nice try.')
    } else if (randomOutput === 'S') {
      window.alert('Sorry, I got you. Loser.')
    } else if (randomOutput === 'R') {
      window.alert('OK, you got me. I lose.')
    }
  } else if (userInput === 'S') {
    random = Math.random()
    if (random > 0 && random < 0.33) {
      randomOutput = 'R'
    } else if (random > 0.33 && random < 0.66) {
      randomOutput = 'P'
    } else if (random > 0.66 && random < 1) {
      randomOutput = 'S'
    }
    window.alert('My choice is ' + randomOutput)
    if (userInput === randomOutput) {
      window.alert('It\'s a tie. Nice try.')
    } else if (randomOutput === 'R') {
      window.alert('Sorry, I got you. Loser.')
    } else if (randomOutput === 'P') {
      window.alert('OK, you got me. I lose.')
    }
  } else {
    var answerNo = window.confirm('Well, since you didn\'t make a valid choice, let us try something else.')
    if (answerNo) {
      var userAge = window.prompt('How old are you?')
      userAge = parseInt(userAge)
      if (userAge > 12) {
        window.alert('Wow, Did you know that you are older than USARPS tournaments?')
      } else if (userAge < 12) {
        window.alert('Wow, Did you know that USARPS tournaments is older than you?')
      } else if (userAge === 12) {
        window.alert('Wow, you are the same age as the USARPS tournaments')
      } else {
        window.alert('Please give me a number.')
      }
    }
  }
}
