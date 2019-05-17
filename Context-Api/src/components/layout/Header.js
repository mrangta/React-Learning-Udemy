import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { branding } = props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><span className="fas fa-home"> Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link"><span className="fas fa-plus"> Add Contact</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
Header.defaultProps = {
    branding: "My App"
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Header;
