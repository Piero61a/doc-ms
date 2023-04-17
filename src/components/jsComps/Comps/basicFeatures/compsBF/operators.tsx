import FormatOperators from "../formatOperators/formatOperators";
import operators from "../../../../../constants/operators";

const Operators = () => {
  return (
    <div className="basic">
      <p className="text-position">
        En JavaScript, existen tres operadores lógicos principales: AND (&&), OR
        (||) y NOT (!). A continuación, te explico brevemente cada uno de ellos:
      </p>
      <div>
        <FormatOperators data={operators} />
      </div>
    </div>
  );
};

export default Operators;
