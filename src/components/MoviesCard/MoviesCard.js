import React from "react";
import {mainApi} from "../../utils/MainApi";

function MoviesCard(props) {
    const [clicks, setClicks] = React.useState(false)
    const foundFilms = ()=>{
        let films = localStorage.getItem("foundFilms")
        return (JSON.parse(films))
    }


    const cardLikeButtonClassName = "like-button";
    const cardNoLikeButtonClassName = "nolike-button";


    const handleButtonDeleteClick = () => {
        mainApi.deleteMovie(props.movie._id)
            .then(() => {
                props.setSavedMovies(props.movie._id)
            })
            .catch(console.log)
    }

    const handleButtonLikeClick = () => {
        if (clicks) {
            console.log(props.movie)
            mainApi.deleteMovie(props.movie._id)
                .then(() => {
                })
                .catch(console.log)
            setClicks(false)
        } else setClicks(true)
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
            .then((newMovie) => {
                props.setSavedMovies(newMovie)
            })
            .catch(console.log)
    }

    // React.useEffect(() => {
    //     for (let i = 0; i<foundFilms().length; i++){
    //                 for (let j = 0; j<props.savedMovies.length; j++) {
    //                     if (foundFilms()[i].nameRU === props.savedMovies[j].nameRU) {
    //
    //                     }
    //                 }
    //             }
    //
    // }, [])

    return (
        <li className="movies-card">
            <a href={props.movie.trailerLink}>{props.moviesRoute ? <div className="movies-card__image"
                                                                        style={{backgroundImage: `url( https://api.nomoreparties.co/${props.movie.image.url})`}}></div> :
                <div className="movies-card__image"
                     style={{backgroundImage: `url( ${props.movie.image})`}}></div>}

            </a>
            <div className="movies-card__block">
                <h2 className="movies-card__title">{props.movie.nameRU}</h2>
                {props.moviesRoute ? <button className={clicks ? cardLikeButtonClassName : cardNoLikeButtonClassName}
                                             onClick={handleButtonLikeClick} type="button"></button> :
                    <button className="delete-button" type="button" onClick={handleButtonDeleteClick}></button>}
            </div>
            <p className="movies-card__duration">{props.movie.duration}</p>
        </li>
    )
}

export default MoviesCard;