import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const path = useLocation()
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="/home"
              style={
                path.pathname == "/home"
                  ? { outline: "4px solid white",padding: '0 0.5rem' }
                  : {}
              }
              className="Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/e-library"
                  ? { outline: "4px solid white" ,padding: '0 0.5rem'}
                  : {}
              }
              to="/e-library"
            >
              eLibrary
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/casestatus"
                  ? { outline: "4px solid white",padding: '0 0.5rem' }
                  : {}
              }
              to="/casestatus"
            >
              Case Status
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/judges"
                  ? { outline: "4px solid white",padding: '0 0.5rem' }
                  : {}
              }
              to="/judges"
            >
              Judges
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/calendar"
                  ? { outline: "4px solid white",padding: '0 0.5rem' }
                  : {}
              }
              to="/calendar"
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/causelist"
                  ? { outline: "4px solid white",padding: '0 0.5rem' }
                  : {}
              }
              to="/causelist"
            >
              Cause List
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/priority-cases"
                  ? { outline: "4px solid white",padding: '0 0.5rem' }
                  : {}
              }
              to="/priority-cases"
            >
              Priority Cases
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/link"
                  ? { outline: "4px solid white" ,padding: '0 0.5rem'}
                  : {}
              }
              to="/link"
            >
              Link
            </Link>
          </li>
          <li>
            <Link
              style={
                path.pathname == "/contact"
                  ? { outline: "4px solid white",padding: '0 0.5rem' }
                  : {}
              }
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
}
