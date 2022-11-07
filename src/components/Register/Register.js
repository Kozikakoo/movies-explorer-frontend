import React from "react";
import Form from "../Form/Form";

function Register() {
    return (
        <Form children={<><label className="form__label" htmlFor="name">Имя</label>
            <input className="form__input" type="text" name="" id="name" required/></>} title="Добро пожаловать!"
              submit="Зарегистрироваться" question="Уже зарегистрированы?" linkText="Войти" link="/signin" submitClassName="form__submit-reg"/>
    )
}

export default Register;