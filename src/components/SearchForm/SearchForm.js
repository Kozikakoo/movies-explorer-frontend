import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    const inputSearchFilmRef = React.useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmitSearchFilm(inputSearchFilmRef.current.value)
    }

    React.useEffect(()=> {
        inputSearchFilmRef.current.value = "";
    }, [])

    return (
        <div className="search-form__block">
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-form__input" type="search" id="search" placeholder="Фильм" required ref={inputSearchFilmRef} onChange={props.onChangeSearchInput}/>
                <button className="search-form__button" type="submit">Поиск</button>
                <div className="search-error" id="searchErr"></div>
                <FilterCheckbox/>
            </form>
        </div>
    )
}

export default SearchForm;