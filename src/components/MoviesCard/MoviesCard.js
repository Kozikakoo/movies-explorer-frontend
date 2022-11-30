import React from "react";
import {mainApi} from "../../utils/MainApi";

function MoviesCard(props) {
    const [like, setLike] = React.useState(false)

    const cardLikeButtonClassName = "like-button";
    const cardNoLikeButtonClassName = "nolike-button";

    const handleButtonDeleteClick = () => {
        mainApi.deleteMovie(props.movie._id)
            .then((res)=> {

                console.log(res)
            })
            .catch(console.log)
    }

    const handleButtonLikeClick = () => {
        if (like) {
            setLike(false)

        } else setLike(true)
        mainApi.addMovies(
            props.movie.country,
            props.movie.director,
            props.movie.duration,
            props.movie.year,
            props.movie.description,
            `https://api.nomoreparties.co/${props.movie.image.url}`,
            props.movie.trailerLink,
            props.movie.nameRU,
            props.movie.nameEN,
            `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`,
            props.movie.movieId
        )
            .then((savedMovie) => {
                console.log(savedMovie)
            })
            .catch(console.log)
    }

    return (
        <li className="movies-card">
            <a href={props.movie.trailerLink}>{props.moviesRoute ? <div className="movies-card__image"
                                                                        style={{backgroundImage: `url( https://api.nomoreparties.co/${props.movie.image.url})`}}></div> :
                <div className="movies-card__image"
                     style={{backgroundImage: `url( ${props.movie.image})`}}></div>}

            </a>
            <div className="movies-card__block">
                <h2 className="movies-card__title">{props.movie.nameRU}</h2>
                {props.moviesRoute ? <button className={like ? cardLikeButtonClassName : cardNoLikeButtonClassName}
                                             onClick={handleButtonLikeClick} type="button"></button> :
                    <button className="delete-button" type="button" onClick={handleButtonDeleteClick}></button>}
            </div>
            <p className="movies-card__duration">{props.movie.duration}</p>
        </li>
    )
}

export default MoviesCard;