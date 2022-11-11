import React from "react";


function MoviesCard(props) {
    // const [like, setLike] = React.useState(false)

    // const cardLikeButtonClassName = ;
    // const cardNoLikeButtonClassName = "movies-card__nolike";
    // const cardDeleteButtonClassName = "movies-card__delete"

    // const handleButtonLikeClick = () => {
    //     if (like) {
    //         setLike(false)
    //     }
    //     else setLike(true)
    // }
    // {like ? cardLikeButtonClassName : cardNoLikeButtonClassName}

    return (
        <div className="movies-card">
            <div className="movies-card__image" style={{backgroundImage: `url(${props.movie.image})`}}></div>
            <div className="movies-card__block">
                <h2 className="movies-card__title">{props.movie.title}</h2>
                <div className="movies-card__like" style={{backgroundImage: `url(${props.button})`}}
                     onClick={props.handleButtonLikeClick}></div>
            </div>
            <p className="movies-card__duration">{props.movie.duration}</p>
        </div>
    )
}

export default MoviesCard;