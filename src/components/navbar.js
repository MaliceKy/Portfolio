import { Link } from 'react-router-dom';
import '../assests/styles/navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <a href="mailto:..." className="nav-link">Contact</a> 
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;

