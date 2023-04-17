import React, { useState } from "react";
import CodeWindow from "../../../../../sharedComponents/windowCode/codeWindow";

const variableCode = `    // Declaración de una variable llamada "edad"
    var edad = 8;

    // Imprime la edad en la consola
    console.log("Mi edad es: " + edad);

    // Actualiza la variable con una nueva edad
    edad = 9;

    // Imprime la nueva edad en la consola
    console.log("Mi nueva edad es: " + edad);
`;

const Variables = () => {
  return (
    <div className="basic">
      <div className="codebox">
        <CodeWindow code={variableCode} />
      </div>
    </div>
  );
};

export default Variables;
