const functionsData = [
  {
    id: 1,
    title: `1.6.1. Funciones declarativas o statement functions:`,
    paragraph: `Las funciones declarativas son definidas utilizando la palabra clave "function" seguida del nombre de la función y un conjunto de paréntesis que pueden contener parámetros de entrada separados por comas. Estas funciones pueden ser invocadas antes de su declaración debido al concepto de "hoisting".
    Por ejemplo:`,
    code: `    function sum(a, b){
            return a + b;
        }`,
  },
  {
    id: 2,
    title: `1.6.2. Funciones expresivas o function expressions:`,
    paragraph: `Las funciones expresivas son definidas utilizando la palabra clave "function" destro de una expresiòn, como una variable o una propiedad de un objeto. Estas funciones no pueden ser invocadas antes de su definición.
    Por ejemplo:`,
    code: `    const sum = function(a, b){
            return a + b;
        }`,
  },
  {
    id: 3,
    title: `1.6.3. Funciones de flecha o arrow functions:`,
    paragraph: `Las funciones de flechas son una forma más concisa de definir funciones en JavaScript. Se utiliza una sintaxis más breve que las funciones declarativas y expresivas y siempre son anónimas. También ofrecen un contexto léxico "this" más predecible.
    Por ejemplo:`,
    code: `    const sum = (a, b) =>{
            return a + b
        }
    `,
  },
  {
    id: 4,
    title: `1.6.4. Funciones de constructor o constructor functions:`,
    paragraph: `Las funciones de constructor son utilizadas para crear objetos específicos. Se definen utilizando la parabla clave "function" y el nombre de la función comienza con una letra mayúscula. El operador "new" se utiliza para crear una instacia de la función de constructor.
    Por ejemplo:`,
    code: `    function Person(name,age){
            this.name = name;
            this.age = age;
        }`,
  },
  {
    id: 5,
    title: `1.6.5. Funciones de método o method funcions:`,
    paragraph: `Las funciones de método son funciones que se definen dentro de un objeto y se acceden utilizando la sintaxis de punto. Pueden utilizar la parabra clave "this" para hacer referencia a las propiedades del objeto.
    Por ejemplo:`,
    code: `    const calculator = {
            num1: 0,
            num2: 0,
            sum: function(){
                return this.num1 + this.num2
            }
        }`,
  },
  {
    id: 6,
    title: `1.6.6. Funciones de retorno o return functions:`,
    paragraph: `Las funciones de retorno son funciones que se utilizan como argumentos para otras funciones. Son muy comunes en JavaScript para realizar operaciones de filtrado y mapeo.
    Por ejemplo:`,
    code: `    const numbers = [1,2,3,4,5];
        const filteredNumbers = numbers.filter(function(number){
            return number > 3
        });
        console.log(filteredNumbers); // output:[4,5]`,
  },
];
export default functionsData