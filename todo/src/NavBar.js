import { Link } from 'react-router-dom'
const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/Home">To Do</Link></li>
                <li><Link to="/Statistics">Statistics</Link></li>
                <li><Link to="/Help">Support</Link></li>
                <li><Link to="/Setting">Setting</Link></li>
                <li><Link to="/LogIn">Logging</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;