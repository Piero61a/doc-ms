const logicalOperator = [
  {
    id: 1,
    title: `1.3.1. Operador AND (&&)`,
    paragraph: ` Este operador devuelve true si ambos operandos son verdaderos, y false en cualquier otro caso. Por ejemplo:`,
    code: `    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && false); // false`,
  },
  {
    id: 2,
    title: `1.3.2. Operador OR (||)`,
    paragraph: ` Este operador devuelve true si al menos uno de los operandos es verdadero, y false si ambos operandos son falsos. Por ejemplo:`,
    code: `    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || false); // false`,
  },
  {
    id: 3,
    title: `1.3.3. Operador NOT (!)`,
    paragraph: ` Este operador invierte el valor de su único operando. Si el operando es verdadero, devuelve false, y si el operando es falso, devuelve true. Por ejemplo:`,
    code: `    console.log(!true); // false
    console.log(!false); // true`,
  },
];
export default logicalOperator
