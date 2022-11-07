import React from "react";
import logo from '../../images/logo.jpg'
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <Link to="/"><img
                className={props.logoClassName}
                src={logo}
                alt="Логотип"
            /></Link>
            {props.children}

        </header>
    )
}

export default Header