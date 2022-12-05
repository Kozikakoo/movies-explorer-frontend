import React from "react";
import Main from "../Main/Main";
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import PopupMenu from "../PopupMenu/PopupMenu";
import {validateName, validatePassword, validateEmail, validateSearchInput} from "../../utils/validation"
import {moviesApi} from "../../utils/MoviesApi";
import {mainApi} from "../../utils/MainApi";
import * as auth from "../../utils/auth"
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {searchFilms} from "../../utils/SearchFilms";
import ProtectedRoute from "../ProtectedRoute";
import Header from "../Header/Header";


function App() {
    const [moviesCards, setMoviesCards] = React.useState([])
    const [isEditUser, setIsEditUser] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [userData, setUserData] = React.useState({})
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [currentUser, setCurrentUser] = React.useState({})
    const [savedMovies, setSavedMovies] = React.useState([])
    const [newMoviesCards, setNewMoviesCards] = React.useState([])
    const [isCheckShortMovie, setIsCheckShortMovie] = React.useState(false)
    const checkboxInput = document.querySelector(".form-switch__text");
    const history = useHistory();


    const handleOpenMenuPopupClick = () => {
        setIsOpen(true)
    }

    const handleCloseMenuPopupClick = () => {
        setIsOpen(false)
    }

    const handleCheckbox = () => {
        if (checkboxInput.checked === true) {
            setIsCheckShortMovie(true)
            console.log(true)

        } else setIsCheckShortMovie(false)
    }

    const handleLogin = ({password, email}) => {
        setUserData({password, email})
        auth.authorize(password, email)
            .then((data) => {
                    if (data.token) {
                        localStorage.setItem("token", data.token)
                        history.push('/')
                        setLoggedIn(true)
                        return data.token
                    }
                }
            )
            .catch(console.log)

    }

    const handleRegister = ({password, email, name}) => {
        auth.register(password, email, name)
            .then((res) => {
                    if (res) {
                        history.push('/signin')
                    }
                }
            )
            .catch(console.log);
    }

    const handleSaveMovie = (movie) => {
        mainApi.addMovies(
            movie.country,
            movie.director,
            movie.duration,
            movie.year,
            movie.description,
            movie.image,
            movie.trailer,
            movie.nameRU,
            movie.nameEN,
            movie.thumbnail,
            movie.movieId)
            .then((savedMovie) => {
                console.log(savedMovie)
            })
    }

    const handleEditUserClick = (event) => {
        setIsEditUser(true)

        event.preventDefault()
    }

    const handleLogout = () => {
        setLoggedIn(false)
        localStorage.removeItem("token")
        history.push("/")
    }

    const handleUpdateUser = (currentUser) => {
        mainApi.editProfile(currentUser.email, currentUser.name )
            .then((res) => {
                setCurrentUser(res);
            })
            .catch(console.log)
    }

    let foundShortFilms = []

    const handleSearchFilm = (valueSearchInput) => {
        let foundFilms = []
        setIsLoading(true);
        moviesApi.getMovies()
            .then((res) => {
                    let newRegex = searchFilms(valueSearchInput)
                    for (let i = 0; i < res.length; i++) {
                        const stringRes = JSON.stringify(res[i])
                        if (newRegex.test(stringRes) && isCheckShortMovie === true) {
                            if (res[i].duration < 41)
                                foundFilms.push(res[i])
                        } else if (newRegex.test(stringRes) && isCheckShortMovie === false) {
                            foundFilms.push(res[i])
                        }
                    }
                    setMoviesCards(foundFilms)
                    console.log(foundFilms)
                    localStorage.setItem("foundFilms", JSON.stringify(foundFilms))
                    // if(window.innerWidth>768) {
                    //
                    //     for (let k=0; k < 8; k++) {
                    //         newMoviesCards.push(res[k])
                    //     }
                    //
                    // }
                    // if(window.innerWidth>320)     {
                    //     for (let i=0; i < 4; i++) {
                    //         newMoviesCards.push(moviesCards[i])
                    //     }}
                    // for (let i=0; i < 2; i++) {
                    //     newMoviesCards.push(moviesCards[i])
                    // }


                }
            )
            // .then(() => {
            //     for (let i = 0; i < foundFilms.length; i++) {
            //         if (foundFilms[i].duration < 41) {
            //             foundShortFilms.push(foundFilms[i])
            //         }
            //     }
            //     console.log(foundShortFilms)
            //     setMoviesCard(foundShortFilms)
            //     localStorage.setItem("foundShortFilms", JSON.stringify(foundShortFilms))
            // })
            .catch(console.log)
            .finally(() => {
                setIsLoading(false);
            })
    }

    React.useEffect(() => {
        setIsLoading(true);
        mainApi.getSavedMovies()
            .then((res) =>
                setSavedMovies(res)
            )
            .catch(console.log)
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    React.useEffect(() => {
        mainApi.getProfile()
            .then((userData) =>
                setCurrentUser(userData))
            .catch(console.log)
    }, [])

    const tokenCheck = () => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token")
            auth.checkToken(token)
                .then((res) => {
                        if (res) {
                            setLoggedIn(true)
                            history.push('/')
                        }
                    }
                )
                .catch(console.log)
        }
    }

    React.useEffect(() => {
        tokenCheck()
    }, [])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div classname="App">
                <div classname="page">
                    <Switch>
                        <Route exact path="/">
                            <Main isOpen={isOpen && ("popup-menu__open")} onClickClosedPopup={handleCloseMenuPopupClick}
                                  children={loggedIn ? <Header logoClassName="logo" children={<>
                                      <div className="header__block-buttons">
                                          <Link to="/movies">
                                              <button className="header__button-films">Фильмы</button>
                                          </Link>
                                          <Link to="/saved-movies">
                                              <button className="header__button-savedfilms">Сохраненные фильмы</button>
                                          </Link>
                                      </div>
                                      <div className="header__menu" onClick={handleOpenMenuPopupClick}></div>
                                      <Link className="header__button-acc" to="/profile">
                                          <div className="header__button-img"></div>
                                          Аккаунт
                                      </Link>
                                  </>}/> : <Header logoClassName="logo" children={<div className="header__buttons">
                                      <Link to="/signup">
                                          <button className="header__button-reg">Регистрация</button>
                                      </Link>
                                      <Link to="/signin">
                                          <button className="header__button-log">Войти</button>
                                      </Link>
                                  </div>}/>}/>
                        </Route>
                        <ProtectedRoute path="/movies"
                                        component={Movies}
                                        loggedIn={loggedIn}
                                        movies={moviesCards}
                                        setMoviesCards={(savedFilms) => setMoviesCards(JSON.parse(savedFilms))}
                                        onClick={handleOpenMenuPopupClick}
                                        onSubmitSearch={handleSearchFilm} isLoading={isLoading}
                                        onChangeSearchInput={validateSearchInput} like={handleSaveMovie}
                                        onClickCheckbox={handleCheckbox}
                                        isOpen={isOpen && ("popup-menu__open")}
                                        onClickClosedPopup={handleCloseMenuPopupClick}
                        />
                        <Route path="/signup">
                            <Register onRegister={handleRegister}/>
                        </Route>
                        <Route path="/signin">
                            <Login onLogin={handleLogin}/>
                        </Route>
                        <ProtectedRoute path="/profile"
                                        component={Profile}
                                        loggedIn={loggedIn}
                                        onUpdateUser={handleUpdateUser}
                                        onClickLogout={handleLogout}
                                        onClick={handleOpenMenuPopupClick}
                                        userName={currentUser.name} email={currentUser.email}
                                        onClickEditButton={handleEditUserClick}
                                        isEdit={isEditUser}
                                        isOpen={isOpen && ("popup-menu__open")}
                                        onClickClosedPopup={handleCloseMenuPopupClick}
                        />
                        <ProtectedRoute path="/saved-movies"
                                        component={SavedMovies}
                                        loggedIn={loggedIn}
                                        movies={moviesCards} savedMovies={savedMovies}
                                        onClick={handleOpenMenuPopupClick}
                                        onSubmitSearch={handleSearchFilm} isLoading={isLoading}
                                        onChangeSearchInput={validateSearchInput} onClickCheckbox={handleCheckbox}
                                        isOpen={isOpen && ("popup-menu__open")}
                                        onClickClosedPopup={handleCloseMenuPopupClick}
                        />
                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;