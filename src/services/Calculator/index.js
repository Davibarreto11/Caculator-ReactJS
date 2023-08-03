function ServiceCalculator() {
  const add = '+';
  const subtration = '-';
  const division = '/';
  const multiplication = '*';

  function calculate(number1, number2, operation) {
    let result;

    switch (operation) {
      case add:
        result = number1 + number2;
        break;
      case subtration:
        result = number1 - number2;
        break;
      case division:
        result = number1 / number2;
        break;
      case multiplication:
        result = number1 * number2;
        break;
      default:
        result = 0;
    }

    return result;
  }

  function concatenateNumber(currentNumber, concatNumber) {
    if (currentNumber === '0' || concatNumber === null) {
      currentNumber = '';
    }

    if (concatNumber === '.' && currentNumber === '') {
      return '0.';
    }

    if (concatNumber === '.' && currentNumber.indexOf('.')) {
      return currentNumber;
    }

    return currentNumber + concatNumber;
  }

  return [
    calculate,
    concatenateNumber,
    add,
    subtration,
    division,
    multiplication,
  ];
}

export default ServiceCalculator;
