import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import LikeButton from "../LikeButton/LkeButton";
import Preloader from "../Preloader/Preloader";


function MoviesCardList(props) {

        return (
        <>{props.isLoading ? <Preloader/> : <ul className="card-list"> {

            props.movies.map((movie) =>

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

            {props.isLoading && <button className="card-list__more">Ещё</button>}
        </>
    )
}

export default MoviesCardList;