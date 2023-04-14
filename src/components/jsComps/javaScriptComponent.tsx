import CodeWindow from "../../sharedComponents/windowCode/CodeWindow";
import "./javaScriptComponent.css";

let variableCode = `// Declaración de una variable llamada "edad"
var edad = 8;

// Imprime la edad en la consola
console.log("Mi edad es: " + edad);

// Actualiza la variable con una nueva edad
edad = 9;

// Imprime la nueva edad en la consola
console.log("Mi nueva edad es: " + edad);
`;

let variableNumeros = `var edad = 8;
var precio = 19.99;
`;

let variableStrings = `var nombre = "María";
var mensaje = 'Hola, ¿cómo estás?';
`;

let variableBoolean = `var esMayorDeEdad = true;
var estaLloviendo = false;`;

let variableArray = `var frutas = ["manzana", "naranja", "plátano"];
var numeros = [1, 2, 3, 4, 5];`;

let variableObject = `var persona = {
  nombre: "Juan",
  edad: 27,
  ciudad: "Bogotá"
};
`;
export default function JavaScriptComponent() {
  return (
    <div className="container">
      <h1 className="title-general">¿Que es JavaScript?</h1>
      <p className="p-js">
        JavaScript es un lenguaje de programación orientado a objetos,
        interpretado y de alto nivel utilizado para agregar interactividad y
        funcionalidad a las páginas web, así como para crear aplicaciones web
        escalables y eficientes. Su flexibilidad y versatilidad lo convierten en
        una herramienta esencial para cualquier proyecto web.
      </p>
      <div className="items">
        <h2 className="title">0. Herramientas necesarias</h2>
        <ol className="list-tools">
          <li>
            1. Editor de código -
            <a className="tools" href="https://code.visualstudio.com/">
              Descargar Visual studio code
            </a>
          </li>
          <li>
            2. Node -
            <a className="tools" href="https://nodejs.org/en">
              Descargar Node
            </a>
          </li>
        </ol>
      </div>
      <div className="items">
        <div>
          <h2 className="title">1. Carácteristicas básicas</h2>
          <div className="basic">
            <h3 className="title-1">1.1. Variables.</h3>
            <div className="codebox">
              <CodeWindow code={variableCode}></CodeWindow>
            </div>
          </div>
          <div className="basic">
            <h3 className="title-1">1.2. Tipos de variables</h3>
            <p className="paragraph">
              Existen 5 tipos de variables, y son las siguientes:
            </p>
            <div>
              <div className="basic">
                <h3 className="title-2">1.2.1. Numero: </h3>
                <p className="paragraph">
                  Este tipo de variable se utiliza para almacenar números, ya
                  sea enteros o decimales. Por ejemplo:
                </p>
                <div className="codebox">
                  <CodeWindow code={variableNumeros}></CodeWindow>
                </div>
              </div>
              <div className="basic">
                <h3 className="title-2">1.2.2. String: </h3>
                <p className="paragraph">
                  Esta variable se utiliza para almacenar texto o cadenas de
                  caracteres. Se pueden definir utilizando comillas simples o
                  dobles. Por ejemplo:
                </p>
                <div className="codebox">
                  <CodeWindow code={variableStrings}></CodeWindow>
                </div>
              </div>
              <div className="basic">
                <h3 className="title-2">1.2.3. Boolean: </h3>
                <p className="paragraph">
                  Este tipo de variable solo puede tener dos valores posibles:
                  "true" o "false". Se utilizan para realizar operaciones
                  lógicas y de comparación. Por ejemplo:
                </p>
                <div className="codebox">
                  <CodeWindow code={variableBoolean}></CodeWindow>
                </div>
              </div>
              <div className="basic">
                <h3 className="title-2">1.2.4. Array: </h3>
                <p className="paragraph">
                  Es una estructura de datos que se utiliza para almacenar una
                  colección de valores, ya sean números, strings u otros
                  objetos. Se definen utilizando corchetes y separando los
                  elementos por comas. Por ejemplo:
                </p>
                <div className="codebox">
                  <CodeWindow code={variableArray}></CodeWindow>
                </div>
              </div>
              <div className="basic">
                <h3 className="title-2">1.2.5. Object: </h3>
                <p className="paragraph">
                  Este tipo de variable se utiliza para almacenar una colección
                  de propiedades y valores relacionados entre sí. Se definen
                  utilizando llaves y separando las propiedades por comas. Por
                  ejemplo:
                </p>
                <div className="codebox">
                  <CodeWindow code={variableObject}></CodeWindow>
                </div>
              </div>
              <p className="paragraph">
                Estos son solo algunos de los tipos de variables que se pueden
                utilizar en JavaScript. Cada uno tiene sus propias
                características y se utilizan en diferentes situaciones
                dependiendo de lo que se quiera lograr.
              </p>
            </div>
          </div>
          <div className="basic">
            <h3 className="title-1 ">1.3. Operadores</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
