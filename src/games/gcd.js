// ----------------------------------------------------------------------
// Игра: "НОД"
// ----------------------------------------------------------------------
// Правила игры:
// пользователю показывается два случайных числа, например, 25 и 50
// пользователь должен вычислить и ввести наибольший общий делитель этих чисел
// ----------------------------------------------------------------------

import { getRandomNumber } from '../utils.js'

// правила игры
const gameRules = 'Find the greatest common divisor of given numbers.'

// функция нахождения наибольшего общего делителя двух чисел
// по алгоритму Евклида
const getGCD = (a, b) => {
  if (b === 0) {
    return a
  }
  else if (a === 0) {
    return b
  }

  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

// данные для игры
const gameData = () => {
  // алгоритм генерации случайной пары чисел от обратного:
  // саначала генерация случаного наибольшего общего делителя
  const gcd = getRandomNumber(2, 5)

  // а затем генерация двух случайных чисел и перемножение на НОД для получения пары
  const firstNumber = getRandomNumber(1, 5) * gcd
  let secondNumber = getRandomNumber(1, 5) * gcd

  // убеждаемся, что числа в полученной паре не равны друг другу:
  // если числа равны, то НОД будет равен этому же числу вне зависимости от сгенерированного НОД
  while (firstNumber === secondNumber) {
    secondNumber = getRandomNumber(1, 5) * gcd
  }

  // вопрос пользователю - полученная пара чисел
  const question = `${firstNumber} ${secondNumber}`

  // получение правильного ответа
  const correctAnswer = getGCD(firstNumber, secondNumber)

  return [question, correctAnswer]
}

export { gameRules, gameData }
