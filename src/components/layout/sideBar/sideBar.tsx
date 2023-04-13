import { NavLink, useLocation } from "react-router-dom";
import { ICON_SIDEBAR_PATH } from "../../../constants/path";
import "./sideBar.css";

interface SideBarProps {
  onComponentSelect: (component: string) => void;
}

function SideBar({ onComponentSelect }: SideBarProps) {
  const location = useLocation();
  console.log(location);

  const sidebarMenuOptions = [
    { name: "Home", icon: "home-icon", path: "/" },
    { name: "JavaScript", icon: "javascript-icon", path: "/javascript" },
    { name: "TypeScript", icon: "typescript-icon", path: "/typescript" },
    { name: "React", icon: "react-icon", path: "/react" },
  ];

  function handleComponentSelect(name: string) {
    onComponentSelect(name);
  }

  return (
    <aside className="sidebar">

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
                  onClick={() => handleComponentSelect(name)}
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
