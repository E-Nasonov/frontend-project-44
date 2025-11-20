import readlineSync from 'readline-sync'

// Проверка чётности числа
const isEven = number => number % 2 === 0

// Генерация случайного числа от 0 до 100 включительно
const getRandomNumber = () => Math.floor(Math.random() * 101)

export default () => {
  // Приветствие, получение имени и объяснение правил
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  // запуск игрового цикла (пользователь должен дать правильный ответ на три вопроса подряд)
  let correctAnswersCount = 0
  const answersRequired = 3
  while (correctAnswersCount < answersRequired) {
    // генерация числа
    const number = getRandomNumber()

    // вопрос пользователю и получение ответа
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')

    // проверка корректности ввода: любой некорректный ввод считается ошибкой и равносилен неправильному ответу
    const answer = userAnswer.toLowerCase()
    const numberIsEven = isEven(number)
    const correctAnswer = numberIsEven ? 'yes' : 'no'

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    // если пользователь ответил верно - увеличиваем счётчик, иначе - завершаем игру
    if (answer === correctAnswer) {
      console.log('Correct!')
      correctAnswersCount += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  // Если счетчик правильных ответов достиг 3-х
  console.log(`Congratulations, ${userName}!`)
}
