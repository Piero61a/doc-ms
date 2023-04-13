import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/navBar/navBar";

import Home from "./pages/home";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Home />} index></Route>
        <Route element={<Home />} path="/javascript"></Route>
        <Route element={<Home />} path="/typescript"></Route>
        <Route element={<Home />} path="/react"></Route>
      </Routes>
    </>
  );
}

export default App;
