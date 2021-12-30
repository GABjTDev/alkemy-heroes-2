import {Link, NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { logout } from "../../actions/auth";
import { resetTeams } from "../../actions/teams";

import '../../styles/components/ui/Navbar.css';

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authAlkemy');
        localStorage.removeItem('villansAlkemy');
        localStorage.removeItem('heroesAlkemy');
        dispatch(logout());
        dispatch(resetTeams());
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Alkemy Heroes</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/heroes">Heroes</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger btn-block" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt"></i><span>  Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
