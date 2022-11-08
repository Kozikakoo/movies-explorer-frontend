import React from "react";

function NavTab() {
    return(
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item" data-section="a-p"><a className="nav__link" href="#section__about-project" >О проекте</a></li>
                <li className="nav__item" data-section="t"><a className="nav__link" href="#section__techs" >Технологии</a></li>
                <li className="nav__item" data-section="a-m"><a className="nav__link" href="#section__about-me" >Студент</a></li>
            </ul>
        </nav>

    )
}

export default NavTab;