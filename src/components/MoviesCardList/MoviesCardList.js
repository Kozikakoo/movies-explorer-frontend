import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import LikeButton from "../LikeButton/LkeButton";


function MoviesCardList(props) {
        return (
        <>
            <div className="card-list">
                {props.movies.slice(0, 16).map((movie) =>

                    <MoviesCard children={<LikeButton/>}
                         movie={{
                        title: movie.NameRu,
                        image: movie.image,
                        duration: movie.duration,

                    }} />)}

            </div>
            <button className="card-list__more">Ещё</button>
        </>
    )
}

export default MoviesCardList;