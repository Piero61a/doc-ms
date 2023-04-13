import "./javaScriptComponent.css";

export default function JavaScriptComponent() {
  return (
    <div className="container">
      <h1 className="title">Javascript</h1>
      <p className="p-js">
        JavaScript es un lenguaje de programación orientado a objetos,
        interpretado y de alto nivel utilizado para agregar interactividad y
        funcionalidad a las páginas web, así como para crear aplicaciones web
        escalables y eficientes. Su flexibilidad y versatilidad lo convierten en
        una herramienta esencial para cualquier proyecto web.
      </p>
      <div>
        <h2 className="title-1">1. Carácteristicas básicas</h2>
        <h3 className="title-1-1">1.1 Variables</h3>
        <section className="div-title-1">
          <pre className="code-window">
            <code className="language-javascript" contentEditable={false}>
              {`function sum(a, b) {return a + b;}`}
            </code>
          </pre>
        </section>
      </div>
    </div>
  );
}
