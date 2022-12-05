import React from "react";
import Form from "../Form/Form";
import {validateEmail, validatePassword} from "../../utils/validation";

function Login(props) {
    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleChangePassword = (e) => {
        handleChange(e)
        validatePassword()
    }

    const handleChangeEmail = (e) => {
        handleChange(e)
        validateEmail()
    }



    const handleSubmitLogin = () => {
        const {password, email} = data;
        if (!email || !password) {
            return;
        }
        props.onLogin({password, email})
    };


return (
        <Form title="Рады видеть!" email={data.email} password={data.password} submitButton="Войти" question="Ещё не зарегистрированы?" linkText="Регистрация"
              link="/signup" submitClassName="form__submit-log" onChangeEmail={handleChangeEmail} onChangePassword={handleChangePassword}
        onSubmit={handleSubmitLogin}/>)}




export default Login;