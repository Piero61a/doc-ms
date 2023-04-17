import { useState } from "react";

import Variables from "./compsBF/variables";
import TOVariables from "./compsBF/tOVariables";
import Conditionals from "./compsBF/conditionals";
import Loops from "./compsBF/loops";
import Functions from "./compsBF/functions";
import Operators from "./compsBF/operators";
type tSubtitle = {
  title: string;
  component: JSX.Element;
};
const subtitles: tSubtitle[] = [
  {
    title: "1.1. Variables",
    component: <Variables />,
  },
  {
    title: "1.2. Tipos de variables",
    component: <TOVariables />,
  },
  {
    title: "1.3. Operadores",
    component: <Operators />,
  },
  {
    title: "1.4. Condicionales",
    component: <Conditionals />,
  },
  {
    title: "1.5. Bucles",
    component: <Loops />,
  },
  {
    title: "1.6. Funciones",
    component: <Functions />,
  },
];

const BasicFeatures = () => {
  const [visibleSubtitle, setVisibleSubtitle] = useState("");

  const handleToggle = (title: string) => {
    setVisibleSubtitle(visibleSubtitle === title ? "" : title);
  };

  return (
    <>
      <div>
        {subtitles.map(({ title, component }) => (
          <div key={title}>
            <h2
              onClick={() => handleToggle(title)}
              className="title-in-subject"
            >
              {title}
            </h2>
            {visibleSubtitle === title && component}
          </div>
        ))}
      </div>
    </>
  );
};

export default BasicFeatures;
