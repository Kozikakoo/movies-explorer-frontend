import React from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom';
import PopupMenu from "../PopupMenu/PopupMenu";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {validateEmail, validateName} from "../../utils/validation";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [isDisabled, setIsDisabled] = React.useState(true)

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    const handleChangeName = (e) => {
        if (e.target.value === currentUser.name)
        {
            setIsDisabled(true)
        } else {
            setName(e.target.value)
            validateName({setIsDisabled})
        }

    }

    const handleChangeEmail = (e) => {
        if (e.target.value === currentUser.email) {
            setIsDisabled(true)
        } else {
            setEmail(e.target.value)
            validateEmail({setIsDisabled})
        }
    }

    const handleSubmit = (e) => {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            email: email,
            name: name
        });
    }

    React.useEffect(()=> {

    }, [currentUser])

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
                <form onSubmit={handleSubmit}>
                    <h1 className="profile__title">Привет, {props.userName}!</h1>
                    <div className="profile__inputs">
                        <div className="profile__row">
                            <label className="profile__table-title" htmlFor="name">Имя</label>
                            <input className="profile__table-info" defaultValue={name || ""} id="name"
                                   onChange={handleChangeName}/>
                            <div className="profile__error" id="nameErr"></div>
                        </div>

                        <div className="profile__row">
                            <label className="profile__table-title" htmlFor="email">E-mail</label>
                            <input className="profile__table-info" defaultValue={email || ""} id="email"
                                   onChange={handleChangeEmail}/>
                            <div className="profile__error" id="emailErr"></div>
                        </div>

                    </div>
                    <div className="profile__buttons">
                        <button className="profile__button-edit" type="submit" disabled={isDisabled}>Редактировать
                        </button>
                        <Link to="/signin">
                            <button className="profile__button-logout" onClick={props.onClickLogout}>Выйти из аккаунта
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            <PopupMenu isOpen={props.isOpen} onClickClosedPopup={props.onClickClosedPopup}/>
        </>
    )
}

export default Profile;