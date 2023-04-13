import "./navBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <NavLink className="nav-navlink" to="/">
          <img src="public/images/logo-white.svg" alt="logo" />
          <h2 className="title-logo">DevHell</h2>
        </NavLink>
      </div>
      <div className="container-networks">
        <div>
          <NavLink className="github-logo" to="https://github.com/Piero61a">
            <img src="public/images/icons/navbar/github-logo.svg" alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink className="discord-logo" to="">
            <img src="public/images/icons/navbar/discord-logo.svg" alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="">
            <h1 className="text">Log out</h1>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
