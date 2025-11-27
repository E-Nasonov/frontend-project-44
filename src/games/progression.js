// ----------------------------------------------------------------------
// Игра: "Арифметическая прогрессия"
// ----------------------------------------------------------------------
// Правила игры:
// Пользователю показывается ряд чисел, образующий арифметическую прогрессию,
// заменив любое из чисел двумя точками. Игрок должен определить это число.
// ----------------------------------------------------------------------

import { getRandomNumber } from '../utils.js'

// правила игры
const gameRules = 'What number is missing in the progression?'

// функция для создания последовательности
const createProgression = (start, step, length) => {
  const result = []

  for (let index = 0; index < length; index += 1) {
    const currentElement = start + index * step
    result.push(currentElement)
  }

  return result
}

// данные для игры
const gameData = () => {
  // задаём параметры будущей последовательности
  const start = getRandomNumber(1, 10)
  const step = getRandomNumber(2, 5)
  const length = 10

  // выбираем случайный элемент, который будет скрыт
  const hiddenIndex = getRandomNumber(0, length - 1)

  // создаём последовательность
  const progression = createProgression(start, step, length)

  // получение правильного ответа
  const correctAnswer = progression[hiddenIndex]

  // сокрытие элемента прогрессии
  progression[hiddenIndex] = '..'

  // вопрос пользователю - прогрессия со скрытым элементом
  const question = progression.join(' ')

  return [question, correctAnswer]
}

export { gameRules, gameData }
