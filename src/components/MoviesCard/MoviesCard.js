import React from "react";

function MoviesCard(props) {

    return (
        <li className="movies-card">
            <a href={props.movie.trailerLink}>
            <div className="movies-card__image"
                 style={{backgroundImage: `url( https://api.nomoreparties.co/${props.movie.image.url})`}}></div>
        </a>
            <div className="movies-card__block">
                <h2 className="movies-card__title">{props.movie.nameRU}</h2>
                {props.children}
            </div>
            <p className="movies-card__duration">{props.movie.duration}</p>
        </li>
    )
}

export default MoviesCard;