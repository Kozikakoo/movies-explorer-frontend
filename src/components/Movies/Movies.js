import React from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import PopupMenu from "../PopupMenu/PopupMenu";

function Movies(props) {
    const [moviesRoute, setMoviesRoute] = React.useState(false)

   const foundFilms = ()=>{
       let films = localStorage.getItem("foundFilms")
       return (JSON.parse(films))
   }

    React.useEffect(() => {
        setMoviesRoute(true)
    }, [])

    React.useEffect(() => {
        if (foundFilms()) {
            props.setMoviesCards(foundFilms())
            if (localStorage.getItem("checkbox") === "true") {
                document.querySelector(".form-switch__text").setAttribute("checked", "true")
            }
        }
    }, [])


    return (<>
            <Header logoClassName="logo" children={<>
                <div className="header__block-buttons">
                    <Link to="/movies">
                        <button className="header__button-films">Фильмы</button>
                    </Link>
                    <Link to="/saved-movies">
                        <button className="header__button-savedfilms">Сохраненные фильмы</button>
                    </Link>
                </div>
                <div className="header__menu" onClick={props.onClick}></div>
                <Link className="header__button-acc" to="/profile">
                    <div className="header__button-img"></div>
                    Аккаунт
                </Link>
            </>}/>
            <main>
                <SearchForm onSubmitSearchFilm={props.onSubmitSearch}
                            onClickCheckbox={props.onClickCheckbox}/>
                <MoviesCardList movies={props.movies} isLoading={props.isLoading} like={props.like}
                                moviesRoute={moviesRoute} savedMovies={props.savedMovies} setSavedMovies={props.setSavedMovies}/>
            </main>
            <Footer/>
            <PopupMenu isOpen={props.isOpen} onClickClosedPopup={props.onClickClosedPopup}/>
        </>

    )
}

export default Movies;