import React from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import PopupMenu from "../PopupMenu/PopupMenu";
import {handleMoreImage, moviePerRow} from "../../utils/buildAdaptiveGrid";


function SavedMovies(props) {
    const [next, setNext] = React.useState(moviePerRow);

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
                <div className="header__menu" onClick={props.onClick}></div>
                <Link className="header__button-acc" to="/profile">
                    <div className="header__button-img"></div>
                    Аккаунт
                </Link>
            </>}/>
            <main>
                <SearchForm onSubmitSearchFilm={props.onSubmitSearchFilm}/>
                {props.isLoading ? <Preloader/> :
                    <ul className="saved-movies">
                        {props.savedMovies.slice(0, next).map((movie) =>
                            <MoviesCard setSavedMovies={props.setSavedMovies} movie={{
                                nameRU: movie.nameRU,
                                image: movie.image,
                                duration: movie.duration,
                                _id: movie._id,
                                trailerLink: movie.trailerLink
                            }}/>)}
                    </ul>}
                {next < props.savedMovies.length &&
                    <button className="card-list__more" onClick={() => handleMoreImage(setNext, next)}>Ещё</button>}
            </main>
            <Footer/>
            <PopupMenu isOpen={props.isOpen} onClickClosedPopup={props.onClickClosedPopup}/>
        </>
    )
}

export default SavedMovies;