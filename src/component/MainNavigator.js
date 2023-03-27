// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Alternatív megoldás a NavLink

import classes from "./MainNavigator.module.css"


function MainNavigation() {
    return (
        <footer className={classes.footer}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            (isActive ? classes.active : undefined)
                        }
                            end
                        >Read</NavLink>

                    </li>
                    <li>
                        <NavLink to="/create"
                            className={({ isActive }) => (isActive ? classes.active : undefined)}
                        >Create</NavLink>
                    </li>
               
                </ul>
            </nav>
        </footer>
    )
}

export default MainNavigation;