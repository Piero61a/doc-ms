const bucles = [
  {
    id: 1,
    title: `1.5.1. Bucle while:`,
    paragraph1: `El bucle "while" ejecuta un bloque de código mientras se cumpla una condición determinada.`,
    code1: `    while (condición) {
            // bloque de código a ejecutar mientras se cumpla la condición
          }`,
    paragraph2: `Por ejemplo, el siguiente bucle "while" imprime los números del 1 al 5:`,
    code2: `    let i = 1;
        while (i <= 5) {
          console.log(i);
          i++;
        }`,
  },
  {
    id: 2,
    title: `1.5.2. Bucle do-while:`,
    paragraph1: `El bucle "do-while" es similar al "while", pero primero ejecuta el bloque de código y luego evalúa la condición.`,
    code1: `    do {
            // bloque de código a ejecutar al menos una vez
          } while (condición);`,
    paragraph2: `Por ejemplo, el siguiente bucle do-while imprime los números del 1 al 5:`,
    code2: `    let i = 1;
        do {
          console.log(i);
          i++;
        } while (i <= 5);`,
  },
  {
    id: 3,
    title: `1.5.3. Bucle for:`,
    paragraph1: `El bucle "for" es una estructura más avanzada que combina la inicialización de una variable, la evaluación de una condición y la actualización de la variable en una sola línea de código.`,
    code1: `    for (inicialización; condición; actualización) {
            // bloque de código a ejecutar mientras se cumpla la condición
          }`,
    paragraph2: `Por ejemplo, el siguiente bucle "for" imprime los números del 1 al 5:`,
    code2: `    for (let i = 1; i <= 5; i++) {
            console.log(i);
          }`,
  },
];
export default bucles