import React from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import PopupMenu from "../PopupMenu/PopupMenu";

function Movies(props) {
    const [moviesRoute, setMoviesRoute] = React.useState(false)

    React.useEffect(() => {
        setMoviesRoute(true)
    }, [])

    React.useEffect(() => {
        let savedFilms = localStorage.getItem("foundFilms")
        props.setMoviesCards(savedFilms)
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
                                moviesRoute={moviesRoute}/>
            </main>
            <Footer/>
        <PopupMenu isOpen={props.isOpen} onClickClosedPopup={props.onClickClosedPopup}/>
        </>

    )
}

export default Movies;