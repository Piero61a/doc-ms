import { useState } from "react";

import "./home.css";

import NavBar from "../components/layout/navBar/navBar";
import SideBar from "../components/layout/sideBar/sideBar";

import HomeComponent from "../components/homeComps";
import JavaScriptComponent from "../components/jsComps/javaScriptComponent";
import TypeScriptComponent from "../components/tsComps/typeScriptComponent";
import ReactComponent from "../components/reactComps/reactComponent";
import Footer from "../components/layout/footer/footer";

function Home() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  function handleComponentSelect(component: string) {
    setSelectedComponent(component);
  }

  return (
    <main className="container-general">
      <div className="home-container">
        <SideBar onComponentSelect={handleComponentSelect} />
        <div className="home">
          <section className="dashboard">
            {selectedComponent === "Home" && <HomeComponent />}
            {selectedComponent === "JavaScript" && <JavaScriptComponent />}
            {selectedComponent === "TypeScript" && <TypeScriptComponent />}
            {selectedComponent === "React" && <ReactComponent />}
            {!selectedComponent && <HomeComponent />}
          </section>
        </div>
      </div>
          <Footer />
    </main>
  );
}

export default Home;
// ``````
