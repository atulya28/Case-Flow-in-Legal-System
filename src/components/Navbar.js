import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
        <Link to="/" className="Home">
            Home
        </Link>

        <ul>
            <li>
                <Link to="/e-library">eLibrary</Link>
            </li>
            <li>
                <Link to="/casestatus">Case Status</Link>
            </li>
            <li>
                <Link to="/judges">Judges</Link>
            </li>
            <li>
                <Link to="/calendar">Calendar</Link>
            </li>
            <li>
                <Link to="causelist">Cause List</Link>
            </li>
            <li>
                <Link to="/prioritycases">Priority Cases</Link>
            </li>
            <li>
                <Link to="/link">Link</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
    );
}
