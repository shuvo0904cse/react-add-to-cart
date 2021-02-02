import React from 'react';
import classes from './NavigationMenu.module.css'

import {NavLink} from 'react-router-dom'

const NavigationMenu = () => {
    return (
        <div>
            <ul className={classes.menu_lists}>
                <li>
                    <NavLink exact className={classes.active} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact className={classes.active} to="/about-us">About Us</NavLink>
                </li>
                <li>
                    <NavLink exact className={classes.active} to="/orders">Orders</NavLink>
                </li>
                <li>
                    <NavLink exact className={classes.active} to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink exact className={classes.active} to="/contact">Contact</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default NavigationMenu;