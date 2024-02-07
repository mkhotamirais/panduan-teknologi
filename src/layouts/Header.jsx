import { NavLink } from "react-router-dom";
import { FaHome, FaMoon, FaReact, FaUser } from "react-icons/fa";
import { useState } from "react";

const menus = [
  { to: "start", text: "start" },
  { to: "databases", text: "databases" },
  { to: "nodejs", text: "nodejs" },
  { to: "vcs", text: "vcs" },
];

const Header = () => {
  const [active, setActive] = useState(null);

  return (
    <header className="border-b px-3 lg:px-16 h-16 flex justify-between items-center sticky top-0 z-50 bg-white">
      <nav className="flex items-center gap-6">
        <NavLink to="/" onClick={() => setActive(null)}>
          <FaHome />
        </NavLink>
        <div className="flex gap-3 overflow-x-scroll w-48 xs:w-full">
          {menus.map((menu, i) => (
            <NavLink
              key={i}
              to={menu.to}
              onClick={() => setActive(i)}
              className={`${active === i ? "opacity-50" : null} capitalize hover:opacity-50`}
            >
              {menu.text}
            </NavLink>
          ))}
        </div>
      </nav>
      <nav className="flex gap-3">
        <button>
          <FaUser />
        </button>
        <button>
          <FaMoon />
        </button>
        <NavLink to="reactjs">
          <FaReact />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
