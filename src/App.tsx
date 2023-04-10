import { Routes, Route } from "react-router-dom";

import Layout from "./views/layout/layout";
import NavBar from "./views/navBar/navBar";

import Home from "./pages/home";
import PendingProjects from "./pages/pendientProjects";
import Completedproject from "./pages/completedproject";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index></Route>
          <Route element={<PendingProjects />} path="/pendingProjects"></Route>
          <Route
            element={<Completedproject />}
            path="/completedproject"
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
