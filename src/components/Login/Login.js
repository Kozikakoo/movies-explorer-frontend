import React from "react";
import Form from "../Form/Form";
import {validateEmail, validatePassword} from "../../utils/validation";

function Login(props) {
    const [isDisabled, setIsDisabled] = React.useState(true)
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
        validatePassword({setIsDisabled})
    }

    const handleChangeEmail = (e) => {
        handleChange(e)
        validateEmail({setIsDisabled})
    }


    const handleSubmitLogin = () => {
        const {password, email} = data;
        if (!email || !password) {
            return;
        }
        props.onLogin({password, email})
    };

    React.useEffect(() => {
        const {password, email} = data;
        if (!email || !password) {
            setIsDisabled(true)
        }
    }, [data])

    return (
        <Form title="Рады видеть!" email={data.email} password={data.password} submitButton="Войти"
              question="Ещё не зарегистрированы?" linkText="Регистрация"
              link="/signup" submitClassName="form__submit-log" onChangeEmail={handleChangeEmail}
              onChangePassword={handleChangePassword}
              onSubmit={handleSubmitLogin} isDisabled={isDisabled}/>)
}

export default Login;