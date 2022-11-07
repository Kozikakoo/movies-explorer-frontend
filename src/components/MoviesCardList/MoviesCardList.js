import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import card1 from "../../images/33_words.jpg";
import card2 from "../../images/2.jpg";
import card3 from "../../images/3.jpg";
import card4 from "../../images/4.jpg";
import card5 from "../../images/5.jpg";
import card6 from "../../images/6.jpg";
import card7 from "../../images/7.jpg";
import card8 from "../../images/8.jpg";

function MoviesCardList() {
    return (<div className="card-list">
            <MoviesCard card={{title: "33 слова о дизайне", image: card1, duration: "1ч42м"}}/>
            <MoviesCard
                card={{title: "Киноальманах «100 лет дизайна»", image: card2, duration: "1ч42м"}}/>
            <MoviesCard card={{title: "В погоне за Бенкси", image: card3, duration: "1ч42м"}}/>
            <MoviesCard card={{title: "Баския: Взрыв реальности", image: card4, duration: "1ч42м"}}/>
            <MoviesCard card={{title: "Бег это свобода", image: card5, duration: "1ч42м"}}/>
            <MoviesCard card={{title: "Книготорговцы", image: card6, duration: "1ч42м"}}/>
            <MoviesCard card={{title: "Когда я думаю о Германии ночью", image: card7, duration: "1ч42м"}}/>
            <MoviesCard card={{title: "Gimme Danger: История Игги и The Stooges", image: card8, duration: "1ч42м"}}/>
        </div>
    )
}

export default MoviesCardList;