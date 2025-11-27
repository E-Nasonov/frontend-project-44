// ----------------------------------------------------------------------
// Игра: "Простое ли число?"
// ----------------------------------------------------------------------
// Правила игры:
// Пользователю показывается случайное число
// Нужно ответить "yes", если число простое, или "no" — если нет
// ----------------------------------------------------------------------

import { getRandomNumber } from '../utils.js'

// правила игры
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

// функция для проверки, является ли число простым
const isPrime = (number) => {
  // проверяем, если число меньше 2, то число не является простым
  if (number < 2) {
    return false
  }

  // проверяем, если число равно 2, то число является простым
  else if (number === 2) {
    return true
  }

  // проверяем, если число четное, то число не является простым
  else if (number % 2 === 0) {
    return false
  }

  // проверяем нечетные числа от 3 до квадратного корня проверяемого числа
  const limit = Math.sqrt(number)
  for (let divider = 3; divider <= limit; divider += 2) {
    if (number % divider === 0) {
      return false
    }
  }

  return true
}

// в любом диапазоне количество простых чисел будет меньше, чем не простых
// выровняем шансы выпадения для обоих видов цифр

// функция для создания массивов простых и составных чисел
const createSequence = (min = 1, max = 50) => {
  const primes = []
  const nonPrimes = []

  for (let i = min; i <= max; i += 1) {
    if (isPrime(i)) {
      primes.push(i)
    }
    else {
      nonPrimes.push(i)
    }
  }

  return { primes, nonPrimes }
}

// создаём массивы
const { primes, nonPrimes } = createSequence(1, 50)

// данные для игры
const gameData = () => {
  // для выравнивания шансов подбрасываем монетку
  const usePrime = getRandomNumber(0, 1) === 1

  // выбираем нужный массив
  const sequence = usePrime ? primes : nonPrimes

  // вопрос пользователю - случайное число из выбранного массива
  const question = sequence[getRandomNumber(0, primes.length - 1)]

  // правильный ответ уже известен
  const correctAnswer = usePrime ? 'yes' : 'no'

  return [question, correctAnswer]
}

export { gameRules, gameData }
