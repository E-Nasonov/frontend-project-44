// ----------------------------------------------------------------------
// Этот файл должен предоставлять движку уникальные данные для игры
// ----------------------------------------------------------------------
// Контент:
// - правила игры
// - уникальные данные для игры
//   - генерация случайного математического выражения - вопрос пользователю
//   - получение правильного ответа

// ----------------------------------------------------------------------
// Игра: "Калькулятор"
// ----------------------------------------------------------------------
// Правила игры:
// пользователю показывается случайное математическое выражение,
// например 35 + 16, которое нужно вычислить и записать правильный ответ.
// ----------------------------------------------------------------------

import { getRandomNumber, getRandomOperator } from '../utils.js'

// правила игры
const gameRules = 'What is the result of the expression?'

// данные для игры
const gameData = () => {
  // генерация 2-х случайных операндов (от 1 до 10 включительно) и оператора
  const firstOperand = getRandomNumber(1, 11)
  const secondOperand = getRandomNumber(1, 11)
  const operator = getRandomOperator()

  // вопрос пользователю - полученное математическое выражение
  const question = `${firstOperand} ${operator} ${secondOperand}`

  // получение правильного ответа в соответствии с выпавшим оператором
  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = firstOperand + secondOperand
      break
    case '-':
      correctAnswer = firstOperand - secondOperand
      break
    case '*':
      correctAnswer = firstOperand * secondOperand
      break
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }

  return [question, correctAnswer]
}

export { gameRules, gameData }
