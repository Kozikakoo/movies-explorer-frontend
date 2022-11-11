import React from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom';


function Form(props) {

    return (<div className="form__container">
        <Header logoClassName="logo-form"/>
        <form className="form" noValidate>
            <h1 className="form__title">{props.title}</h1>
            {props.children}
            <label className="form__label" htmlFor="email">E-mail</label>
            <input className="form__input" type="email" id="email" required onChange={props.onChangeEmail}/>
            <div className="error" id="emailErr"></div>
            <label className="form__label" htmlFor="password">Пароль</label>
            <input className="form__input" type="password" id="password" required onChange={props.onChangePassword}/>
            <div className="error" id="passwordErr"></div>
            <button className={props.submitClassName} type="submit">{props.submit}</button>
            <div className="form__container-link">
                <p className="form__question">{props.question}</p>
                <Link to={props.link} className="form__link">{props.linkText}</Link>
            </div>
        </form>
    </div>)

}

export default Form;