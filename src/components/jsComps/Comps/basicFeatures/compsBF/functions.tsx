import FormatFunctions from "../formatFunctions/formatFunctions";
import functionsData from "../../../../../constants/functions";

const Functions = () => {
  return (
    <div className="basic">
      <div>
        <p className="text-position">
          Una función es un bloque de código que se puede llamar y ejecutar
          varias veces con diferentes valores de entrada. Las funciones se
          utilizan para agrupar código que realiza una tarea específica, lo que
          las hace muy útiles para reulización de código y para la modularidad
        </p>
        <p className="text-position">
          Hay varios tipos de funciones, cada uno con sus propias
          características. A continuación, se describen los diferentes tipos de
          funciones en JavaScript
        </p>
        <FormatFunctions data={functionsData} />
      </div>
    </div>
  );
};

export default Functions;
