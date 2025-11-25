// ----------------------------------------------------------------------
// Этот файл должен выполнять функцию игрового движка
// т.е. обрабатывать общую для всех игр логику
// ----------------------------------------------------------------------
// Общая логика:
// - приветствие и получение имени
// - объяснение правил
// - игровой цикл на 3 раунда
// - получение данных для вопроса и правильного ответа
// - вопрос пользователю и получение его ответа
// - проверка ответов пользователя
// - завершение игры
// ----------------------------------------------------------------------

import readlineSync from 'readline-sync'
import greetUser from './cli.js'

const runGame = (gameRules, gameData) => {
  // приветствие и получение имени
  const userName = greetUser()

  // объяснение правил
  console.log(gameRules)

  // запуск игрового цикла
  const answersRequired = 3
  for (let correctAnswersCount = 0; correctAnswersCount < answersRequired; correctAnswersCount += 1) {
    // получение данных для вопроса и правильного ответа
    let [question, correctAnswer] = gameData()

    // приведение правильного ответа к типу "строка" для строгого сравнения с ответом пользователя (всегда строка)
    correctAnswer = String(correctAnswer)

    // вопрос пользователю и получение его ответа
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()

    // проверка ответов пользователя:
    // любой некорректный ввод считается ошибкой и равносилен неправильному ответу
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)

      return
    }

    // если пользователь ответил верно - продолжаем игру
    console.log('Correct!')
  }

  // если счетчик правильных ответов достиг 3-х - победа
  console.log(`Congratulations, ${userName}!`)
}

export default runGame
