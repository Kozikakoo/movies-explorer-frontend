import React from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom';
import PopupMenu from "../PopupMenu/PopupMenu";

function Profile(props) {


    return (<>
            <Header logoClassName="logo" children={<>
                <div className="header__block-buttons">
                    <Link to="/movies">
                        <button className="header__button-films">Фильмы</button>
                    </Link>
                    <Link to="/saved-movies">
                        <button className="header__button-savedfilms">Сохраненные фильмы</button>
                    </Link>
                </div>
                <div className="header__menu" onClick={props.onClick}></div>
                <Link className="header__button-acc" to="/profile">
                    <div className="header__button-img"></div>
                    Аккаунт
                </Link>
            </>}/>
            <div className="profile">
                <form>
                    <h1 className="profile__title">Привет, {props.userName}!</h1>
                    <div className="profile__inputs">
                        <div className="profile__row" >
                            <label className="profile__table-title" htmlFor="userName">Имя</label>
                            <input className="profile__table-info" value={props.userName} id="userName"/>
                        </div>
                        <div className="profile__row">
                            <label className="profile__table-title" htmlFor="email">E-mail</label>
                            <input className="profile__table-info" value={props.email} id="email"/>
                        </div>
                    </div>
                    <div className="profile__buttons">
                        <button className="profile__button-edit" onClick={props.onClickEditButton}>Редактировать
                        </button>
                        <Link to="/signin">
                            <button className="profile__button-logout">Выйти из аккаунта</button>
                        </Link>
                    </div>
                </form>
            </div>
            <PopupMenu isOpen={props.isOpen} onClickClosedPopup={props.onClickClosedPopup}/>
        </>
    )
}

export default Profile;