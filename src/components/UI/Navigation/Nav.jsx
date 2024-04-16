// import React from "react";

import { navigation } from "../../../data";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-base">
        {navigation.map((navItem, index) => (
          <li
            key={index}
            className="text-white hover:text-accent cursor-pointer"
          >
            <NavLink
              activeClass="active"
              to={navItem.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="transition-all duration-300"
            >
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
