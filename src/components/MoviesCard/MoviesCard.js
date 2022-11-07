import React from "react";


function MoviesCard(props) {
    const cardLikeButtonClassName = "movies-card__like";
    const cardNoLikeButtonClassName = "movies-card__nolike";
    const [like, setLike] = React.useState(false)
    const handleButtonLikeClick = () => {
        if (like) {
            setLike(false)
        }
        else setLike(true)
    }

    return (
        <div className="movies-card">
            <div className="movies-card__image" style={{backgroundImage: `url(${props.card.image})`}}></div>
            <div className="movies-card__block">
                <h2 className="movies-card__title">{props.card.title}</h2>
                <div className={like ? cardLikeButtonClassName : cardNoLikeButtonClassName}
                     onClick={handleButtonLikeClick}></div>
            </div>
            <p className="movies-card__duration">{props.card.duration}</p>
        </div>
    )
}

export default MoviesCard;