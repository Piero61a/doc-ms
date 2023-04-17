import FormatBucles from "../formatBucles/formatBucles";
import bucles from "../../../../../constants/bucles";

const Loops = () => {
  return (
    <div className="basic">
      <div>
        <p className="text-position">
          En JavaScript, los bucles son estructuras de control que permiten
          repetir un bloque de código varias veces mientras se cumpla una
          condición específica. Los tres tipos principales de bucles en
          JavaScript son: `while`, `do-while` y `for`.
        </p>
        <FormatBucles data={bucles} />
      </div>
    </div>
  );
};

export default Loops;
