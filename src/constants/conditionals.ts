const conditionals = [
  {
    id: 1,
    paragraph1: `Las declaraciones condicionales son una parte importante del flujo de control en JavaScript, y te permiten ejecutar diferentes bloques de código dependiendo de si se cumple una condición determinada.`,
    paragraph2: `La declaración condicional más básica es la declaración if. Esta declaración evalúa una expresión dentro de los paréntesis y, si la expresión es verdadera, ejecuta el bloque de código dentro de las llaves que sigue. Si la expresión es falsa, el bloque de código dentro de las llaves no se ejecuta.
    
    Aquí tienes un ejemplo:
    `,
    code: `let x = 10;
    if (x > 5) {
      console.log("x es mayor que 5");
    }`,
  },
  {
    id: 2,
    paragraph1: `En este ejemplo, la expresión entre paréntesis es x > 5. Como x tiene un valor de 10, la expresión es verdadera, por lo que se ejecuta el bloque de código dentro de las llaves y se muestra el mensaje "x es mayor que 5" en la consola.`,
    paragraph2: `Puedes agregar una declaración else para proporcionar un bloque de código alternativo en caso de que la expresión sea falsa. Aquí tienes un ejemplo:`,
    code: `let x = 2;
    if (x > 5) {
      console.log("x es mayor que 5");
    } else {
      console.log("x es menor o igual a 5");
    }`,
  },
  {
    id: 3,
    paragraph1: `En este ejemplo, como x tiene un valor de 2, la expresión x > 5 es falsa, por lo que se ejecuta el bloque de código dentro de la declaración else y se muestra el mensaje "x es menor o igual a 5" en la consola.`,
    paragraph2: `En este ejemplo, como x tiene un valor de 2, la expresión x > 5 es falsa, por lo que se ejecuta el bloque de código dentro de la declaración else y se muestra el mensaje "x es menor o igual a 5" en la consola.`,
    code: `let x = 10;
    if (x < 5) {
      console.log("x es menor que 5");
    } else if (x === 5) {
      console.log("x es igual a 5");
    } else {
      console.log("x es mayor que 5");
    }`,
  },
];
export default conditionals