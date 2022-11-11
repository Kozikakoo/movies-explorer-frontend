import React from "react";

export const printError = (elemId, hintMsg) => {
    document.getElementById(elemId).innerHTML = hintMsg;
    document.querySelectorAll(".form__input").forEach((element) => {
        element.classList.add("form__input-error")
    })
}

export const validateName = () => {
    let name = document.getElementById("name").value;
    let nameErr = true

    if (name === "") {
        printError("nameErr", "Пожалуйста, введите ваше имя");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Пожалуйста, введите правильное имя");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    return nameErr !== true;

}

export const validateEmail = () => {
    let email = document.getElementById("email").value;
    let emailErr = true

    if (email === "") {
        printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
    } else {
        // Регулярное выражение для базовой проверки электронной почты
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    return emailErr !== true;

}
export const validatePassword = () => {
    let password = document.getElementById("password").value;
    let passwordErr = true

    if (password === "") {
        printError("passwordErr", "Пожалуйста, введите пароль");
    } else {
        // Регулярное выражение для базовой проверки электронной почты
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        if (regex.test(password) === false) {
            printError("passwordErr", "Некорректный пароль, укажите хотя бы одну заглавную и прописную латинскую букву");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    return passwordErr !== true;
}



