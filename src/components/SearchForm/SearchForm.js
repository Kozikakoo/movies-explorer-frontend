import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <div className="search-form__block">
            <form className="search-form">
                <input className="search-form__input" type="search" placeholder="Фильм"/>
                <button className="search-form__button" type="submit">Поиск</button>
                <FilterCheckbox/>
            </form>
        </div>
    )
}

export default SearchForm;