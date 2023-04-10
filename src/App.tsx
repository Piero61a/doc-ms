import "./App.css"
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/navBar/navBar";

import Home from "./pages/home";
import PendingProjects from "./pages/pendientProjects";
import Completedproject from "./pages/completedproject";
import Footer from "./components/layout/footer/footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Home />} index></Route>
        <Route element={<Home />} path="/javascript"></Route>
        <Route element={<Home />} path="/typescript"></Route>
        <Route element={<Home />} path="/react"></Route>
        <Route element={<PendingProjects />} path="/pendingProjects"></Route>
        <Route element={<Completedproject />} path="/completedproject"></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
