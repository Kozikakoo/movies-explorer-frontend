import React from "react";

function Portfolio() {
    return(
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li><a className="portfolio__link" href="https://kozikakoo.github.io/how-to-learn/" target="_blank">Статичный сайт<div className="portfolio__img-link"></div></a></li>
                <li><a className="portfolio__link" href="https://kozikakoo.github.io/russian-travel/index.html" target="_blank">Адаптивный сайт<div className="portfolio__img-link"></div></a></li>
                <li><a className="portfolio__link" href="https://kozikakoo.github.io/mesto/index.html" target="_blank">Одностраничное приложение<div className="portfolio__img-link"></div></a></li>
            </ul>
        </section>
    )
}

export default Portfolio;