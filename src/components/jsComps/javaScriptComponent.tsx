import "./javaScriptComponent.css";
import CodeWindow from "../../sharedComponents/windowCode/codeWindow";

import typesOfVariables from "../../constants/typesOfVariables";
import operators from "../../constants/operators";

import conditionals from "../../constants/conditionals";
import FormatVariable from "./Comps/formatVariable/formatVariable";
import FormatBucles from "./Comps/formatBucles/formatBucles";
import bucles from "../../constants/bucles";
import FormatOperators from "./Comps/formatOperators/formatOperators";
import FormatConditionals from "./Comps/formatConditional/formatConditionals";
import FormatFunctions from "./Comps/formatFunctions/formatFunctions";
import functionsData from "../../constants/functions";

const variableCode = `    // Declaración de una variable llamada "edad"
    var edad = 8;

    // Imprime la edad en la consola
    console.log("Mi edad es: " + edad);

    // Actualiza la variable con una nueva edad
    edad = 9;

    // Imprime la nueva edad en la consola
    console.log("Mi nueva edad es: " + edad);
`;

export default function JavaScriptComponent() {
  return (
    <div className="container">
      <div className="items">
        <h1 className="title-general">¿Que es JavaScript?</h1>
        <p className="p-js">
          JavaScript es un lenguaje de programación orientado a objetos,
          interpretado y de alto nivel utilizado para agregar interactividad y
          funcionalidad a las páginas web, así como para crear aplicaciones web
          escalables y eficientes. Su flexibilidad y versatilidad lo convierten
          en una herramienta esencial para cualquier proyecto web.
        </p>
      </div>
      <div className="items">
        <h2 className="title-subject">0. Herramientas necesarias</h2>
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
          <h2 className="title-subject">1. Carácteristicas básicas</h2>
          <div className="basic">
            <h3 className="title-in-subject">1.1. Variables</h3>
            <div className="codebox">
              <CodeWindow code={variableCode}></CodeWindow>
            </div>
          </div>
          <div className="basic">
            <h3 className="title-in-subject">1.2. Tipos de variables</h3>
            <p className="text-position">
              Existen 5 tipos de variables, y son las siguientes:
            </p>
            <div>
              <FormatVariable data={typesOfVariables} />
              <p className="text-position">
                Estos son solo algunos de los tipos de variables que se pueden
                utilizar en JavaScript. Cada uno tiene sus propias
                características y se utilizan en diferentes situaciones
                dependiendo de lo que se quiera lograr.
              </p>
            </div>
          </div>
          <div className="basic">
            <h3 className="title-in-subject">1.3. Operadores</h3>
            <p className="text-position">
              En JavaScript, existen tres operadores lógicos principales: AND
              (&&), OR (||) y NOT (!). A continuación, te explico brevemente
              cada uno de ellos:
            </p>
            <div>
              <FormatOperators data={operators} />
            </div>
          </div>
          <div className="basic">
            <h3 className="title-in-subject">1.4. Condicionales</h3>
            <FormatConditionals data={conditionals} />
            <p className="text-position">
              En este ejemplo, la primera expresión `5 &gt; x` es falsa, por lo
              que se verifica la siguiente expresión `x === 5`. Como esta
              expresión también es falsa, se ejecuta el bloque de código dentro
              de la última declaración `else`, y se muestra el mensaje "x es
              mayor que 5" en la consola.
            </p>
            <p className="text-position">
              Recuerda que siempre debes tener una declaración `if` cuando estás
              utilizando una declaración `else` o `else if`, ya que estas
              últimas dependen de la evaluación de una expresión dentro de una
              declaración `if`.
            </p>
          </div>
          <div className="basic">
            <h3 className="title-in-subject">1.5. Bucles</h3>
            <p className="text-position">
              En JavaScript, los bucles son estructuras de control que permiten
              repetir un bloque de código varias veces mientras se cumpla una
              condición específica. Los tres tipos principales de bucles en
              JavaScript son: `while`, `do-while` y `for`.
            </p>
            <FormatBucles data={bucles} />
          </div>
          <div className="basic">
            <h3 className="title-in-subject">1.6. Funciones</h3>
            <p className="text-position">
              Una función es un bloque de código que se puede llamar y ejecutar
              varias veces con diferentes valores de entrada. Las funciones se
              utilizan para agrupar código que realiza una tarea específica, lo
              que las hace muy útiles para reulización de código y para la
              modularidad
            </p>
            <p className="text-position">
              Hay varios tipos de funciones, cada uno con sus propias
              características. A continuación, se describen los diferentes tipos
              de funciones en JavaScript
            </p>
            <FormatFunctions data={functionsData}/>
          </div>
        </div>
      </div>
    </div>
  );
}
