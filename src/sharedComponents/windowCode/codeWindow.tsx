import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-light.css"; // o el estilo que hayas instalado
import "./codeWindow.css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

interface CodeWindowProps {
  code: string;
}
const CodeWindow: React.FC<CodeWindowProps> = ({ code }) => {
  return (
    <pre className="code-box">
      <code
        className="language-typescript"
        dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code).value }}
      />
    </pre>
  );
};
export default CodeWindow;
