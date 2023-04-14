import "./formatOperators.css";
interface iFormatOperatos {
  id: number;
  title: string;
  paragraph: string;
  list: string[];
}
type tFormatOperators = {
  data: iFormatOperatos[];
};
const FormatOperators = ({ data }: tFormatOperators) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="container-operators">
          <h3 className="title-operators">{item.title}</h3>
          <p className="paragraph-operators">{item.paragraph}</p>
          <ul className="cont-list">
            {item.list.map((i, idx) => (
              <li key={idx} className="list-operators">
                {idx + 1}. {i}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default FormatOperators;
