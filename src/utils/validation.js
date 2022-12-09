import React from "react";

export const printError = (elemId, hintMsg) => {
    document.getElementById(elemId).innerHTML = hintMsg;
    document.getElementById(elemId).classList.add("form__input-error")

}

export const validateSearchInput = () => {
    let search = document.getElementById("search").value;
    let searchErr = true

    if (search === "") {
        printError("searchErr", "Пожалуйста, введите ключевую фразу или слово");
    } else {
        let regex = /^[а-яА-ЯёЁa-zA-Z -]+$/;
        if (regex.test(search) === false) {
            printError("searchErr", "Пожалуйста, введите ключевую фразу или слово");
            document.getElementById("search").classList.add("form__input-error");
        } else {
            printError("searchErr", "");
            document.getElementById("search").classList.remove("form__input-error")
            searchErr = false;
        }
    }
    return searchErr !== true;
}
//
// export const validate = ({setIsDisabled, name}) =>{
//     let inputValue = document.getElementById(name).value;
//     let input = document.getElementById(name);
//
//
//
//    if (name === "name") {
//        let nameErr = true;
//        if (inputValue === "") {
//            printError("nameErr", "Пожалуйста, введите ваше имя");
//            setIsDisabled(true)
//        }
//        else {
//            let regexName = /^[а-яА-ЯёЁa-zA-Z -]+$/;
//            if (regexName.test(inputValue) === false) {
//                printError("nameErr", "Пожалуйста, введите правильное имя");
//                input.classList.add("form__input-error");
//                setIsDisabled(true)
//            } else {
//                printError("nameErr", "");
//                input.classList.remove("form__input-error")
//                nameErr = false;
//                setIsDisabled(false)
//            }
//        }
//        return nameErr !== true;
//    }
//
//    if (name === "email") {
//        let emailErr = true;
//        if (inputValue === "") {
//            printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
//            setIsDisabled(true)
//        } else {
//            // Регулярное выражение для базовой проверки электронной почты
//            let regexEmail = /^\S+@\S+\.\S+$/;
//            if (regexEmail.test(inputValue) === false) {
//                printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
//                input.classList.add("form__input-error");
//                setIsDisabled(true)
//            } else {
//                printError("emailErr", "");
//                input.classList.remove("form__input-error");
//                emailErr = false;
//                setIsDisabled(false)
//            }
//        }
//        return emailErr !== true;
//    }
//
//    if (name === "password") {
//        let passwordErr = true
//        setIsDisabled(true)
//        if (inputValue === "") {
//            printError("passwordErr", "Пожалуйста, введите пароль");
//
//        } else {
//            let regexPassword = /^(?=.*\d)(?=.*[A-Za-z])(?!.*\s).*$/;
//            if (regexPassword.test(inputValue) === false) {
//                printError("passwordErr", "Некорректный пароль, укажите хотя бы одну заглавную или прописную латинскую букву");
//                input.classList.add("form__input-error");
//            } else {
//                printError("passwordErr", "");
//                input.classList.remove("form__input-error");
//                passwordErr = false;
//                setIsDisabled(false)
//            }
//        }
//        return passwordErr !== true;
//
//    }
//
// }

export const validateName = ({setIsDisabled}) => {
    let name = document.getElementById("name").value;
    let nameErr = true

    if (name === "") {
        printError("nameErr", "Пожалуйста, введите ваше имя");
        setIsDisabled(true)
    } else {
        let regex = /^[а-яА-ЯёЁa-zA-Z -]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Пожалуйста, введите правильное имя");
            document.getElementById("name").classList.add("form__input-error");
            setIsDisabled(true)
        } else {
            printError("nameErr", "");
            document.getElementById("name").classList.remove("form__input-error")
            nameErr = false;
            setIsDisabled(false)
        }
    }
    return nameErr !== true;
}

export const validateEmail = ({setIsDisabled}) => {
    let email = document.getElementById("email").value;
    let emailErr = true

    if (email === "") {
        printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
        setIsDisabled(true)
    } else {
        // Регулярное выражение для базовой проверки электронной почты
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
            document.getElementById("email").classList.add("form__input-error");
            setIsDisabled(true)
        } else {
            printError("emailErr", "");
            document.getElementById("email").classList.remove("form__input-error");
            emailErr = false;
            setIsDisabled(false)
        }
    }
    return emailErr !== true;
}

export const validatePassword = ({setIsDisabled}) => {
    let password = document.getElementById("password").value;
    let passwordErr = true

    if (password === "") {
        printError("passwordErr", "Пожалуйста, введите пароль");
        setIsDisabled(true)
    } else {
        let regex = /^(?=.*\d)(?=.*[A-Za-z])(?!.*\s).*$/;
        if (regex.test(password) === false) {
            printError("passwordErr", "Некорректный пароль, укажите хотя бы одну заглавную или прописную латинскую букву");
            document.getElementById("password").classList.add("form__input-error");
            setIsDisabled(true)
        } else {
            printError("passwordErr", "");
            document.getElementById("password").classList.remove("form__input-error");
            passwordErr = false;
            setIsDisabled(false)
        }
    }
    return passwordErr !== true;
}




