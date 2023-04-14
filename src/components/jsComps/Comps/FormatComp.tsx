import CodeWindow from "../../../sharedComponents/windowCode/codeWindow";

import "./FormatComp.css";

interface iFormatComp {
  id: number;
  title: string;
  paragraph: string;
  code: string;
}
type tData = {
  data: iFormatComp[];
};

const FormatComp = ({ data }: tData) => {
  return (
    <ul>
      {data.map((item) => (
        <li className="container-var">
          <h3 className="title-var">{item.title}</h3>
          <p className="paragraph-var">{item.paragraph}</p>
          <div className="codebox-var">
            <CodeWindow code={item.code}/>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FormatComp;
