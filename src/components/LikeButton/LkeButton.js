import React from "react";

function LikeButton() {
    const [like, setLike] = React.useState(false)

    const cardLikeButtonClassName = "like-button";
    const cardNoLikeButtonClassName = "nolike-button";

    const handleButtonLikeClick = () => {
        if (like) {
            setLike(false)
        }
        else setLike(true)
    }

    return (
        <button className={like ? cardLikeButtonClassName : cardNoLikeButtonClassName}
                 onClick={handleButtonLikeClick} type="button"></button>
    )
}

export default LikeButton;
