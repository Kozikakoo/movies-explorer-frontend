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
        <div className={like ? cardLikeButtonClassName : cardNoLikeButtonClassName}
                 onClick={handleButtonLikeClick}></div>
    )
}

export default LikeButton;
