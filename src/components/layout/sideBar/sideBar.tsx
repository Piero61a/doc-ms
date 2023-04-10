import { NavLink, useLocation } from "react-router-dom";
import { ICON_SIDEBAR_PATH } from "../../../constants/path";
import "./sideBar.css";

function SideBar() {
  const location = useLocation();
  console.log(location);

  const sidebarMenuOptions = [
    { name: "javaScript", icon: "javascript-icon", path: "/javascript" },
    { name: "typeScript", icon: "typescript-icon", path: "/typescript" },
    { name: "react", icon: "react-icon", path: "/react" },
  ];

  return (
    <aside className="sidebar">
      <picture className="app-logo-container">
        <img className="app-logo" src="public/images/logo.svg" />
      </picture>

      <nav className="sidebar-nav">
        <section>
          <h3 className="nav-title">Courses</h3>
          <ul className="nav-list">
            {sidebarMenuOptions.map(({ name, icon, path }) => (
              <li key={name}>
                <NavLink
                  className={({ isActive }) =>
                    `sidebar-option ${isActive && `sidebar-option__active`}`
                  }
                  to={path}
                >
                  {location.pathname === path ? (
                    <img src={`${ICON_SIDEBAR_PATH}/${icon}-active.svg`} />
                  ) : (
                    <img src={`${ICON_SIDEBAR_PATH}/${icon}.svg`} />
                  )}
                  <p>{name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </aside>
  );
}
export default SideBar;
