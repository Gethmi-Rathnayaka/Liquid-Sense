import '../App.css'

import {Link, NavLink} from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
            <Link to="/home">LiquidSense</Link>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/sign_up">Sign up</NavLink>
                </li>
            </ul>
        </nav>
    );
        
    ;
}