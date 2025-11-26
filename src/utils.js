// ----------------------------------------------------------------------
// Библиотека с математическими функциями для использования в играх
// ----------------------------------------------------------------------
import crypto from 'crypto'

// Проверка чётности числа
export const isEven = number => number % 2 === 0

// Генерация случайного числа (по умолчанию: от 0 до 100 включительно)
export const getRandomNumber = (min = 0, max = 100) => crypto.randomInt(min, max + 1)

// Выбор математического оператора из массива по случайному индексу
export const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = crypto.randomInt(0, operators.length)
  return operators[randomIndex]
}

// функция нахождения наибольшего общего делителя двух чисел
// алгоритм Евклида
export const getGCD = (a, b) => {
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
