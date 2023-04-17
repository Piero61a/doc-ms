import CodeWindow from "../../../../../sharedComponents/windowCode/codeWindow";
import "./formatFunctions.css";
interface iformatFunctions {
  id: number;
  title: string;
  paragraph: string;
  code: string;
}
type tformatFunctions = {
  data: iformatFunctions[];
};
const FormatFunctions = ({ data }: tformatFunctions) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="container-functions">
          <h3 className="title-functions">{item.title}</h3>
          <p className="paragraph-functions">{item.paragraph}</p>
          <div className="codebox-functions">
            <CodeWindow code={item.code} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FormatFunctions;
