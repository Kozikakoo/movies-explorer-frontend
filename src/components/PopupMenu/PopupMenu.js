import React from "react";
import {Link} from 'react-router-dom';

function PopupMenu(props) {
    return(
        <div className={`popup-menu ${props.isOpen}`}>
            <div className="popup-menu__content">
                <button className="popup-menu__close" onClick={props.onClickClosedPopup}></button>
                <nav className="popup-menu__nav">
                    <ul className="popup-menu__nav-list">
                        <li className="popup-menu__nav-item"><Link className="popup-menu__nav-link" to="/">Главная</Link></li>
                        <li className="popup-menu__nav-item"><Link className="popup-menu__nav-link" to="/movies">Фильмы</Link></li>
                        <li className="popup-menu__nav-item"><Link className="popup-menu__nav-link" to="/saved-movies">Сохраненные фильмы</Link></li>
                    </ul>
                </nav>
                <Link className="popup-menu__button-acc" to="/profile">
                    <div className="popup-menu__button-img"></div>
                    Аккаунт
                </Link>
            </div>
        </div>

    )}

    export default PopupMenu;