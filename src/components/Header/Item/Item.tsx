import { Navbar } from "./styles";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Item: React.FC = () => {
  const headerRouter = [
    {
      active: true,
      url: "/inicio",
      title: "Home",
      icon: <FaHome />,
    },
    {
      active: true,
      url: "/eventos",
      title: "Eventos",
      icon: <FaRegCalendarAlt />,
    },
    {
      active: false,
      url: "/favoritos",
      title: "Favoritos",
    },
    {
      active: false,
      url: "/contato",
      title: "Contato",
    },
  ];

  return (
    <Navbar>
      <ul>
        {headerRouter
          .filter((item) => item.active)
          .map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                exact={item.active}
                activeClassName="activeLink"
              >
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </Navbar>
  );
};
