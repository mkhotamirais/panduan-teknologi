import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layouts = ({ menus, className = "capitalize" }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <nav className="border-b flex items-center gap-4 h-10 sticky top-16 z-40 bg-white overflow-x-scroll">
        {menus.map((menu, i) => (
          <NavLink
            key={i}
            to={menu.to}
            onClick={() => setActive(i)}
            className={`${active === i ? "opacity-50" : null} ${className} hover:opacity-50`}
          >
            {menu.text}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};
Layouts.propTypes;

export default Layouts;
