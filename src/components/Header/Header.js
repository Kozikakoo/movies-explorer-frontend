import React from "react";
import logo from '../../images/logo.jpg'

function Header(props) {
    return (
        <header className="header">
            <img
                className="logo"
                src={logo}
                alt="Логотип"
            />
            {props.children}

        </header>
    )
}

export default Header