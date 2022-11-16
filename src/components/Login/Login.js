import React from "react";
import Form from "../Form/Form";

function Login(props) {
    return (
        <Form title="Рады видеть!" submit="Войти" question="Ещё не зарегистрированы?" linkText="Регистрация"
              link="/signup" submitClassName="form__submit-log" onChangeEmail={props.onChangeEmail} onChangePassword={props.onChangePassword}/>
    )
}

export default Login;