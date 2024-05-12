import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'; // Importera faBars ikonen här
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faBarsStaggered : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Events' className='nav-links' onClick={closeMobileMenu}>
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tickets' className='nav-links' onClick={closeMobileMenu}>
                            Tickets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/orders' className='nav-links' onClick={closeMobileMenu}>
                            Varukorgen
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)
}

export default Navbar;