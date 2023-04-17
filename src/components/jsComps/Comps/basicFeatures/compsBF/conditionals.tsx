import FormatConditionals from "../formatConditional/formatConditionals";
import conditionals from "../../../../../constants/conditionals";

const Conditionals = () => {
  return (
    <div className="basic">
      <div>
        <FormatConditionals data={conditionals} />
        <p className="text-position">
          En este ejemplo, la primera expresión `5 &gt; x` es falsa, por lo que
          se verifica la siguiente expresión `x === 5`. Como esta expresión
          también es falsa, se ejecuta el bloque de código dentro de la última
          declaración `else`, y se muestra el mensaje "x es mayor que 5" en la
          consola.
        </p>
        <p className="text-position">
          Recuerda que siempre debes tener una declaración `if` cuando estás
          utilizando una declaración `else` o `else if`, ya que estas últimas
          dependen de la evaluación de una expresión dentro de una declaración
          `if`.
        </p>
      </div>
    </div>
  );
};

export default Conditionals;
