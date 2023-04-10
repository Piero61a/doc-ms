import { Link } from "react-router-dom";
import "./navBar.css";
function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <Link className="btn btn-outline-primary" to="/pendingProjects">
          Pending project
        </Link>
        <Link className="btn btn-outline-primary" to="/">
          Home
        </Link>
        <Link className="btn btn-outline-primary" to="/completedproject">
          Completed project
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
