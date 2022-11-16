import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__block">
                <p className="footer__data">&copy;2020</p>
                <div className="footer__links">
                    <a className="footer__yandex" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
                    <a className="footer__git" href="https://github.com/Kozikakoo" target="_blank">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;