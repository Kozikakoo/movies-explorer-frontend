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

export const validateName = () => {
    let name = document.getElementById("name").value;
    let nameErr = true

    if (name === "") {
        printError("nameErr", "Пожалуйста, введите ваше имя");
    } else {
        let regex = /^[а-яА-ЯёЁa-zA-Z -]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Пожалуйста, введите правильное имя");
            document.getElementById("name").classList.add("form__input-error");
        } else {
            printError("nameErr", "");
            document.getElementById("name").classList.remove("form__input-error")
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
        document.querySelector(".form__submit-log").setAttribute("disabled", "disabled")
    } else {
        // Регулярное выражение для базовой проверки электронной почты
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
            document.getElementById("email").classList.add("form__input-error");
            document.querySelector(".form__submit-log").setAttribute("disabled", "disabled")
        } else {
            printError("emailErr", "");
            document.getElementById("email").classList.remove("form__input-error");
            document.querySelector(".form__submit-log").removeAttribute("disabled")
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
        document.querySelector(".form__submit-log").setAttribute("disabled", "disabled")
    } else {
        let regex = /^(?=.*\d)(?=.*[A-Za-z])(?!.*\s).*$/;
        if (regex.test(password) === false) {
            printError("passwordErr", "Некорректный пароль, укажите хотя бы одну заглавную или прописную латинскую букву");
            document.getElementById("password").classList.add("form__input-error");
            document.querySelector(".form__submit-log").setAttribute("disabled", "disabled")
        } else {
            printError("passwordErr", "");
            document.getElementById("password").classList.remove("form__input-error");
            document.querySelector(".form__submit-log").removeAttribute("disabled")
            passwordErr = false;
        }
    }
    return passwordErr !== true;
}



