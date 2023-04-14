import React from "react";
import "./FormatConditionals.css";
import CodeWindow from "../../../../sharedComponents/windowCode/codeWindow";
interface iFormatConditionals {
  id: number;
  title: string;
  paragraph1: string;
  paragraph2: string;
  code: string;
}
type tData = {
  data: iFormatConditionals[];
};
const FormatConditionals = ({ data }: tData) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="container-conditional">
          <h3 className="title-conditional">{item.title}</h3>
          <p className="paragraph-conditional">{item.paragraph1}</p>
          <p className="paragraph-conditional">{item.paragraph2}</p>
          <div>
            <CodeWindow code={item.code} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FormatConditionals;
