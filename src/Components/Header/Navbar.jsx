import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="nav nav-pills nav-fill">
            <NavLink className="nav-item nav-link" to='/'>Home</NavLink>

            <NavLink className="nav-item nav-link" to='/about'>About</NavLink>

            <NavLink className="nav-item nav-link" to='/blog'>Blog</NavLink>
        </nav>
        </>
    )
}

export default Navbar;