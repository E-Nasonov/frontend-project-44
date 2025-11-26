// ----------------------------------------------------------------------
// Игра: "Калькулятор"
// ----------------------------------------------------------------------
// Правила игры:
// пользователю показывается случайное математическое выражение,
// например 35 + 16, которое нужно вычислить и записать правильный ответ.
// ----------------------------------------------------------------------

import { getRandomNumber } from '../utils.js'

// правила игры
const gameRules = 'What is the result of the expression?'

// Выбор математического оператора из массива по случайному индексу
const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = getRandomNumber(0, operators.length - 1)
  return operators[randomIndex]
}

// данные для игры
const gameData = () => {
  // генерация 2-х случайных операндов (от 0 до 10 включительно) и оператора
  const a = getRandomNumber(0, 10)
  const b = getRandomNumber(0, 10)
  const operator = getRandomOperator()

  // вопрос пользователю - полученное математическое выражение
  const question = `${a} ${operator} ${b}`

  // получение правильного ответа в соответствии с выпавшим оператором
  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = a + b
      break
    case '-':
      correctAnswer = a - b
      break
    case '*':
      correctAnswer = a * b
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  return [question, correctAnswer]
}

export { gameRules, gameData }
