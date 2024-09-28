"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [root1, root2];
}

const roots = solveEquation(1, -3, 2);
console.log(roots);

("use strict");

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование процентной ставки
  let monthlyRate = percent / 100 / 12;

  // Рассчитываем тело кредита
  let loanBody = amount - contribution;

  // Если тело кредита меньше или равно нулю, возвращаем 0
  if (loanBody <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платеж по формуле
  let monthlyPayment =
    loanBody *
    (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));

  // Рассчитываем общую сумму выплат
  let totalPayment = monthlyPayment * countMonths;

  // Округляем результат до двух знаков после запятой
  return Math.round(totalPayment * 100) / 100;
}

// Примеры использования
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
