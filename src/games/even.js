// ----------------------------------------------------------------------
// Игра: "Проверка на чётность"
// ----------------------------------------------------------------------
// Правила игры:
// Пользователю показывается случайное число
// Нужно ответить "yes", если число чётное, или "no" — если нечётное
// ----------------------------------------------------------------------

import { getRandomNumber, isEven } from '../utils.js'

// правила игры
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

// данные для игры
const gameData = () => {
  // генерация случайного числа
  // вопрос пользователю - полученное число
  const question = getRandomNumber()

  // получение правильного ответа
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export { gameRules, gameData }
