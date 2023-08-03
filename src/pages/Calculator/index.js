import React, { useState } from 'react';

import {
  Juntrobom, Container, Display, Button,
} from './styles';

import ServiceCalculator from '../../services/Calculator';

function Calculator() {
  const [calculate,
    concatenateNumber,
    add,
    subtration,
    division,
    multiplication,
  ] = ServiceCalculator();

  const [txtNumbers, setTxtNumbers] = useState('0');
  const [number1, setNumero1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  const addNumbers = (numero) => {
    let resultado;

    if (operation === null) {
      resultado = concatenateNumber(number1, numero);

      setNumero1(resultado);
    } else {
      resultado = concatenateNumber(number2, numero);

      setNumber2(resultado);
    }

    setTxtNumbers(resultado);
  };

  const addOperation = (op) => {
    if (operation === null) {
      setOperation(op);

      return;
    }

    if (number2 !== null) {
      const resultado = calculate(parseFloat(number1), parseFloat(number2), operation);

      setOperation(op);
      setNumero1(resultado.toString());
      setNumber2(null);
      setTxtNumbers(resultado.toString());
    }
  };

  const calculateAction = () => {
    if (number2 === null) return;

    const resultado = calculate(parseFloat(number1), parseFloat(number2), operation);

    setTxtNumbers(resultado);
  };

  const clear = () => {
    setTxtNumbers('0');
    setNumero1('0');
    setNumber2(null);
    setOperation(null);
  };

  return (
    <Container>
      <h1>Calculator ReactJS</h1>
      <Juntrobom>
        <Display value={txtNumbers}>{txtNumbers}</Display>
        <Button onClick={clear} size="triple">AC</Button>
        <Button onClick={() => addOperation(division)} color="operation">/</Button>
        <Button onClick={() => addNumbers(7)}>7</Button>
        <Button onClick={() => addNumbers(8)}>8</Button>
        <Button onClick={() => addNumbers(9)}>9</Button>
        <Button onClick={() => addOperation(multiplication)} color="operation">*</Button>
        <Button onClick={() => addNumbers(4)}>4</Button>
        <Button onClick={() => addNumbers(5)}>5</Button>
        <Button onClick={() => addNumbers(6)}>6</Button>
        <Button onClick={() => addOperation(subtration)} color="operation">-</Button>
        <Button onClick={() => addNumbers(1)}>1</Button>
        <Button onClick={() => addNumbers(2)}>2</Button>
        <Button onClick={() => addNumbers(3)}>3</Button>
        <Button onClick={() => addOperation(add)} color="operation">+</Button>
        <Button onClick={() => addNumbers(0)}>0</Button>
        <Button onClick={() => addNumbers('.')}>.</Button>
        <Button onClick={calculateAction} size="double" color="operation">=</Button>
      </Juntrobom>
    </Container>

  );
}

export default Calculator;
