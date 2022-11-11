import React from "react";
import Form from "../Form/Form";

function Register(props) {
    return (
        <Form children={<><label className="form__label" htmlFor="name">Имя</label>
            <input className="form__input" type="text" id="name" required onChange={props.onChangeName}/>
            <div className="error" id="nameErr"></div>
        </>} title="Добро пожаловать!"
              submit="Зарегистрироваться" question="Уже зарегистрированы?" linkText="Войти" link="/signin"
              submitClassName="form__submit-reg"
              onChangePassword={props.onChangePassword}
              onChangeEmail={props.onChangeEmail}/>
    )
}

export default Register;