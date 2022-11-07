import React from "react";
import Form from "../Form/Form";

function Login() {
    return(
        <Form title="Рады видеть!" submit="Войти" question="Ещё не зарегистрированы?" linkText="Регистрация" link="/signup" submitClassName="form__submit-log"/>
    )
}

export default Login;