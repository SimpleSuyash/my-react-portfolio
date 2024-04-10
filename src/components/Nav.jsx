import React from 'react'

import{ navigation} from '../data';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-base'>
        {navigation.map((navItem, index) => (
          <li key={index} className='text-white hover:accent cursor-pointer'>
            <Link
              activeClass='active'
              to={navItem.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='transition-all duration-300'
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav