import React from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom';


function Form(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit()
    };

    return (<div className="form__container">
        <Header logoClassName="logo-form"/>
        <main>
            <form className="form" noValidate onSubmit={handleSubmit}>
                <h1 className="form__title">{props.title}</h1>
                {props.children}
                <label className="form__label" htmlFor="email">E-mail</label>
                <input className="form__input" type="email" name="email" id="email" value={props.email || ""} required onChange={props.onChangeEmail}/>
                <div className="error" id="emailErr"></div>
                <label className="form__label" htmlFor="password">Пароль</label>
                <input className="form__input" type="password" name="password" id="password" value={props.password || ""} required
                       onChange={props.onChangePassword}/>
                <div className="error" id="passwordErr"></div>
                <button className={props.submitClassName} type="submit">{props.submitButton}</button>
                <div className="form__container-link">
                    <p className="form__question">{props.question}</p>
                    <Link to={props.link} className="form__link">{props.linkText}</Link>
                </div>
            </form>
        </main>
    </div>)

}

export default Form;