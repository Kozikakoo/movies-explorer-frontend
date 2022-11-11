import React from "react";

function AboutMe() {
    return (
        <section className="about-me" id="section__about-me" data-section="a-m">

            <h2 className="about-me__title">Студент</h2><div className="about-me__block">
            <h3 className="about-me__name">Анастасия</h3><h4 className="about-me__description">Фронтенд-разработчик, 27 лет</h4>
            <p className="about-me__biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
                компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
                и ушёл с постоянной работы.</p>
            <a className="about-me__link" href="https://github.com/Kozikakoo" target="_blank">Github</a><div className="about-me__photo"></div>
            </div>

        </section>
    )
}

export default AboutMe;