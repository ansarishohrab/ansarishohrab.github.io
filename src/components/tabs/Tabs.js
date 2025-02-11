import { NavLink } from "react-router-dom";
import "./Tabs.scss";

const Tabs = (props) => {
  const tabs = [
    { id: "about", title: "About" },
    { id: "resume", title: "Resume" },
    { id: "portfolio", title: "Portfolio" },
    // { id: "contact", title: "Contact" },
  ];
  return (
    <div className="tabs-container">
      <ul className="navbar-list">
        {tabs?.map((tab, index) => {
          return (
            <li key={index} className="navbar-item">
              <NavLink
                to={tab.id}
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                {tab.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
