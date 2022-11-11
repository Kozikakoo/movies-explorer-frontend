import React from "react";

function MoviesCard(props) {

    return (
        <div className="movies-card">
            <div className="movies-card__image" style={{backgroundImage: `url(${props.movie.image})`}}></div>
            <div className="movies-card__block">
                <h2 className="movies-card__title">{props.movie.title}</h2>
                {props.children}
            </div>
            <p className="movies-card__duration">{props.movie.duration}</p>
        </div>
    )
}

export default MoviesCard;