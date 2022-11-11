import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import like from "../../images/like.svg";
import nolike from "../../images/nolike.svg";


function MoviesCardList(props) {
    const [liked, setLiked] = React.useState(false)

    const handleButtonLikeClick = () => {
        if (liked) {
            setLiked(false)
        }
        else setLiked(true)
    }

    return (
        <>
            <div className="card-list">
                {props.movies.slice(0, 16).map((movie) =>

                    <MoviesCard button={liked ? like : nolike}
                        handleButtonLikeClick={handleButtonLikeClick}
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