import React from "react";

function Promo(props) {

    return(
        <div className="promo">
            <h1 className="promo__text">Учебный&nbsp;проект студента факультета Веб&#8209;разработки.</h1>
            {props.children}
        </div>
    )
}

export default Promo;