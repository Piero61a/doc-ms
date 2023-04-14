import CodeWindow from "../../../../sharedComponents/windowCode/codeWindow";

import "./FormatVariable.css";

interface iFormatVariable {
  id: number;
  title: string;
  paragraph: string;
  code: string;
}
type tData = {
  data: iFormatVariable[];
};

const FormatVariable = ({ data }: tData) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id+1} className="container-var">
          <h3 className="title-var">{item.title}</h3>
          <p className="paragraph-var">{item.paragraph}</p>
          <div className="codebox-var">
            <CodeWindow code={item.code} />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default FormatVariable;
