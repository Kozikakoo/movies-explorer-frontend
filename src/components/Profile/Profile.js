import React from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom';

function Profile(props) {

    const savedMarkup = () => {
        return (<>
            <h1 className="profile__title">Привет, {props.userName}!</h1>
            <table className="profile__table">
                <tr className="profile__row">
                    <td className="profile__table-title">Имя</td>
                    <td className="profile__table-info">{props.userName}</td>
                </tr>
                <tr className="profile__row">
                    <td className="profile__table-title">E-mail</td>
                    <td className="profile__table-info">{props.email}</td>
                </tr>
            </table>
            <div className="profile__buttons">
                <button className="profile__button-edit" onClick={props.onClickEditButton}>{props.isEdit ? "Сохранить" : "Редактировать"}</button>
                <button className="profile__button-logout" onClick={props.onClickLogout}>Выйти из аккаунта</button>
            </div>
        </>)
    }

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
                <Link className="header__button-acc" to="/profile">
                    <div className="header__button-img"></div>
                    Аккаунт
                </Link>
            </>}/>
            <div className="profile">
                <form>
                    {savedMarkup()}
                </form>
            </div>
        </>
    )
}

export default Profile;