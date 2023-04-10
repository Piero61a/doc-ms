import { Link } from "react-router-dom";
import "./navBar.css";
function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="item">
        <Link className="btn btn-outline-primary" to="/pendingProjects">
          Pending project
        </Link>
      </div>
      <div className="item">
        <Link className="btn btn-outline-primary" to="/">
          Home
        </Link>
      </div>
      <div className="item">
        <Link className="btn btn-outline-primary" to="/completedproject">
          Completed project
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
