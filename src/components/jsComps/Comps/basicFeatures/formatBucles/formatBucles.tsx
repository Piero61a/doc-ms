import "./formatBucles.css"
import CodeWindow from "../../../../../sharedComponents/windowCode/codeWindow";
interface iFormatBucles {
  id: number;
  title: string;
  paragraph1: string;
  code1: string;
  paragraph2: string;
  code2: string;
}
type tData = {
  data: iFormatBucles[];
};
const FormatBucles = ({ data }: tData) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="container-bucle">
          <h3 className="title-bucle">{item.title}</h3>
          <p className="paragraph-bucle">{item.paragraph1}</p>
          <div className="codebox-bucle">
            <CodeWindow code={item.code1}></CodeWindow>
          </div>
          <p className="paragraph-bucle">{item.paragraph2}</p>
          <div className="codebox-bucle">
            <CodeWindow code={item.code2}></CodeWindow>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FormatBucles;
