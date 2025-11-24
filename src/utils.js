// Библиотека с общими математическими функциями для использования в играх
import crypto from 'crypto'

// Проверка чётности числа
export const isEven = number => number % 2 === 0

// Генерация случайного числа от 0 до 100 включительно
export const getRandomNumber = () => crypto.randomInt(0, 101)
