import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {validateSearchInput} from "../../utils/validation";

function SearchForm(props) {
    const inputSearchFilmRef = React.useRef();

    const handleSubmit = (e) => {
        validateSearchInput()
        if (inputSearchFilmRef.current.value === "") {
            e.preventDefault()
            return
        }
        e.preventDefault()
        props.onSubmitSearchFilm(inputSearchFilmRef.current.value)
    }

    return (
        <div className="search-form__block">
            <form className="search-form" onSubmit={handleSubmit} noValidate>
                <input className="search-form__input" type="search" id="search" placeholder="Фильм" required ref={inputSearchFilmRef}/>
                <button className="search-form__button" type="submit">Поиск</button>
                <div className="search-error" id="searchErr"></div>
                <FilterCheckbox onClickCheckbox={props.onClickCheckbox}/>
            </form>
        </div>
    )
}

export default SearchForm;