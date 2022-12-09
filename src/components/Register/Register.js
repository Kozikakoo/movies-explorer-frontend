import React from "react";
import Form from "../Form/Form";
import {validateEmail, validateName, validatePassword} from "../../utils/validation";

function Register(props) {
    const [isDisabled, setIsDisabled] = React.useState(true)
    const [data, setData] = React.useState({
        password: '',
        email: '',
        name: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleChangeName = (e) => {
        handleChange(e)
        validateName({setIsDisabled})
    }

    const handleChangePassword = (e) => {
        handleChange(e)
        validatePassword({setIsDisabled})
    }

    const handleChangeEmail = (e) => {
        handleChange(e)
        validateEmail({setIsDisabled})
    }

    const handleSubmitRegister = () => {
        const {password, email, name} = data;
        props.onRegister({password, email, name})
    };

    React.useEffect(() => {
        const {password, email, name} = data;
        if (!email || !password || !name) {
            setIsDisabled(true)
        }
    }, [data])

    return (
        <Form email={data.email} password={data.password} children={<><label className="form__label" htmlFor="name">Имя</label>
            <input className="form__input" type="text" id="name" name="name" value={data.name || ""} required onChange={handleChangeName}/>
            <div className="error" id="nameErr"></div>
        </>} title="Добро пожаловать!"
              submitButton="Зарегистрироваться" question="Уже зарегистрированы?" linkText="Войти" link="/signin"
              submitClassName="form__submit-reg"
              onChangePassword={handleChangePassword}
              onChangeEmail={handleChangeEmail} onSubmit={handleSubmitRegister} isDisabled={isDisabled}/>
    )
}

export default Register;