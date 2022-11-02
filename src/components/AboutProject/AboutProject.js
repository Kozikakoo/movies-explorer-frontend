import React from "react";

function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__block">
                <div className="about-project__text">
                    <h3 className="about-project__description">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__description-etc">Составление плана, работу над бэкендом, вёрстку,
                    добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__text">
                    <h3 className="about-project__description">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__description-etc">У каждого этапа был мягкий и жёсткий дедлайн,
                    которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
                    <table className="about-project__table">
                        <tr><th className="about-project__weeks about-project__weeks_green">1 неделя</th><th className="about-project__weeks about-project__weeks_grey">2 неделя</th></tr>
                        <tr><td className="about-project__part">Back-end</td><td className="about-project__part">Front-end</td></tr>
                    </table>
            </div>
        </section>
    )
}

export default AboutProject;