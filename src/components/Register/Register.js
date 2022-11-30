import React from "react";
import Form from "../Form/Form";
import {validateEmail, validateName, validatePassword} from "../../utils/validation";

function Register(props) {
    const [data, setData] = React.useState({
        password: '',
        email: '',
        name: ''

    });

    const handleChangeName = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
        validateName()
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmitRegister = () => {
        console.log("yes")
        const {password, email, name} = data;
        props.onRegister({password, email, name})
    };



    return (
        <Form email={data.email} password={data.password} children={<><label className="form__label" htmlFor="name">Имя</label>
            <input className="form__input" type="text" id="name" name="name" value={data.name || ""} required onChange={handleChangeName}/>
            <div className="error" id="nameErr"></div>
        </>} title="Добро пожаловать!"
              submitButton="Зарегистрироваться" question="Уже зарегистрированы?" linkText="Войти" link="/signin"
              submitClassName="form__submit-reg"
              onChangePassword={handleChange}
              onChangeEmail={handleChange} onSubmit={handleSubmitRegister}/>
    )
}

export default Register;