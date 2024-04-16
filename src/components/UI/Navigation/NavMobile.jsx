import { useState } from "react";

import { navigation } from "../../../data";

//import icons
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";

//import framer motion
//it is used to animate the components
import { motion } from "framer-motion";

//import Link
//it is used to navigate to different sections
import { NavLink } from "react-router-dom";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  //framer motion variants
  //for circle overlay
  const circleVariants = {
    hidden: {
      // opacity: 0,
      scale: 0,
    },
    visible: {
      // opacity: 1,
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  //for ul component
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <nav className="relative">
      {/* menu icon */}
      <div className="cursor-pointer text-white">
        <Bars3BottomRightIcon
          className="size-8"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className=" size-4 rounded-full fixed top-0 right-0 bg-slate-600"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`fixed top-0 bottom-0 w-full flex flex-col items-center justify-center ${
          isOpen ? "right-0" : "-right-full"
        } transition-all duration-300 overflow-hidden`}
      >
        <div className="cursor-pointer absolute top-8 right-8">
          <XMarkIcon
            className="size-8 text-white"
            onClick={() => setIsOpen(false)}
          />
        </div>
        {navigation.map((item, index) => (
          <li key={index} className="mb-4">
            <NavLink
              to={item.href}
              onClick={() => setIsOpen(false)}
              className=" text-2xl cursor-pointer capitalize"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};


export default NavMobile;
