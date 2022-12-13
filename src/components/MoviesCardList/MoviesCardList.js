import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";


function MoviesCardList(props) {
    const moviePerRow = () => {
        if (window.innerWidth > 320) {
            return 8
        } else {
            return 5
        }
    }
    const [next, setNext] = React.useState(moviePerRow);

    const handleMoreImage = () => {
        if (window.innerWidth > 768) {
            setNext(next + 4)
        } else {
            setNext(next + 2);
        }
    }

    return (
        <>{props.isLoading ? <Preloader/> : <ul className="card-list"> {

            props.movies.slice(0, next).map((movie) =>

                <MoviesCard moviesRoute={props.moviesRoute}
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

            {next < props.movies.length && <button className="card-list__more" onClick={handleMoreImage}>Ещё</button>}
            </>
                )
            }

            export default MoviesCardList;