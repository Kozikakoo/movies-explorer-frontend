import React from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import DeleteButton from "../DeleteButton/DeleteButton";

function SavedMovies(props) {
    return (
        <>
            <Header logoClassName="logo" children={<>
                <div className="header__block-buttons">
                    <Link to="/movies">
                        <button className="header__button-films">Фильмы</button>
                    </Link>
                    <Link to="/saved-movies">
                        <button className="header__button-savedfilms">Сохраненные фильмы</button>
                    </Link>
                </div>
                <div className="header__menu"></div>
                <Link className="header__button-acc" to="/profile">
                    <div className="header__button-img"></div>
                    Аккаунт
                </Link>
            </>}/>
            <main>
                <SearchForm/>
                <ul className="saved-movies">
                    {props.movies.slice(0, 3).map((movie) =>
                        <MoviesCard children={<DeleteButton/>} movie={{
                            title: movie.NameRu,
                            image: movie.image,
                            duration: movie.duration
                        }}/>)}
                </ul>
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;