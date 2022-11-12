import React from "react";

function Portfolio() {
    return(
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item"><a className="portfolio__link" href="https://kozikakoo.github.io/how-to-learn/" target="_blank">Статичный сайт</a><div className="portfolio__img-link"></div></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://kozikakoo.github.io/russian-travel/index.html" target="_blank">Адаптивный сайт</a><div className="portfolio__img-link"></div></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://kozikakoo.github.io/mesto/index.html" target="_blank">Одностраничное приложение</a><div className="portfolio__img-link"></div></li>
            </ul>
        </section>
    )
}

export default Portfolio;