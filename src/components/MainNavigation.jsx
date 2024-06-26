/*
  File name : MainNavigation.jsx 
  Student’s Name : Wai Lung Chan 
  StudentID : 301325509 
  Date : 26-May-2024
*/


import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

/*
  Section Header
  Export function MainNavigation to define the navigation page
*/
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="My Logo" className='logo-img'/>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
