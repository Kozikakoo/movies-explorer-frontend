import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {handleMoreImage, moviePerRow} from "../../utils/buildAdaptiveGrid";

function MoviesCardList(props) {
    const [next, setNext] = React.useState(moviePerRow);

    return (
        <>{props.isLoading ? <Preloader/> : <ul className="card-list"> {

            props.movies.slice(0, next).map((movie) =>

                <MoviesCard setSavedMovies={props.setSavedMovies} savedMovies={props.savedMovies} moviesRoute={props.moviesRoute}
                            movie={{
                                trailerLink: movie.trailerLink,
                                nameRU: movie.nameRU,
                                image: movie.image,
                                duration: movie.duration,
                                country: movie.country,
                                director: movie.director,
                                year: movie.year,
                                description: movie.description,
                                nameEN: movie.nameEN,
                                thumbnail: movie.image.formats.thumbnail.url,
                                movieId: movie.id
                            }}/>)
        }

        </ul>
        }

            {next < props.movies.length &&
                <button className="card-list__more" onClick={() => handleMoreImage(setNext, next)}>Ещё</button>}
        </>
    )
}

export default MoviesCardList;