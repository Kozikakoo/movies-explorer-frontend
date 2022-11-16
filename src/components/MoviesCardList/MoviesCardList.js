import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import LikeButton from "../LikeButton/LkeButton";
import Preloader from "../Preloader/Preloader";


function MoviesCardList(props) {
        return (
        <>{props.isLoading ? <Preloader/> : <ul className="card-list"> {props.movies.map((movie) =>

                    <MoviesCard children={<LikeButton/>}
                                movie={{
                                    trailerLink: movie.trailerLink,
                                    nameRU: movie.nameRU,
                                    image: movie.image,
                                    duration: movie.duration,

                                }}/>)}

            </ul>
        }

            {props.isLoading && <button className="card-list__more">Ещё</button>}
        </>
    )
}

export default MoviesCardList;