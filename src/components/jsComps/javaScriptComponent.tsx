import "./javaScriptComponent.css";

import NecessaryTools from "./Comps/necessaryTools/necessaryTools";
import BasicFeatures from "./Comps/basicFeatures/basicFeatures";
import { useState } from "react";
import Objects from "./Comps/objects/objects";
type tTitleData = {
  title: string;
  component: JSX.Element;
};
const titleData: tTitleData[] = [
  { title: "0. Herramientas necesarias", component: <NecessaryTools /> },
  { title: "1. características básicas", component: <BasicFeatures /> },
  { title: "2. Objetos", component: <Objects /> },
];

export default function JavaScriptComponent() {
  const [visibleTitle, setVisibleTitle] = useState("");

  const handleToggle = (title: string) =>
    setVisibleTitle(visibleTitle === title ? "" : title);

  return (
    <div className="container-js">
      <div className="items-js">
        <h1 className="title-general">¿Que es JavaScript?</h1>
        <p className="p-js">
          JavaScript es un lenguaje de programación orientado a objetos,
          interpretado y de alto nivel utilizado para agregar interactividad y
          funcionalidad a las páginas web, así como para crear aplicaciones web
          escalables y eficientes. Su flexibilidad y versatilidad lo convierten
          en una herramienta esencial para cualquier proyecto web.
        </p>
      </div>
      {titleData.map(({ title, component }) => (
        <div key={title} className="items-js">
          <h2 onClick={() => handleToggle(title)} className="title-subject">
            {title}
          </h2>
          {visibleTitle === title && component}
        </div>
      ))}
      {/* <div className="items-js">
        <h2 className="title-subject">0. Herramientas necesarias</h2>
        <NecessaryTools />
      </div>
      <div className="items-js">
        <h2 className="title-subject">1. características básicas</h2>
        <BasicFeatures />
      </div>

      <div className="items-js">
        <h2 className="title-subject">2. Objetos</h2>
      </div> */}
    </div>
  );
}
