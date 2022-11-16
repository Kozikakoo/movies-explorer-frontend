import React from "react";
import Main from "../Main/Main";
import {Route, Switch} from 'react-router-dom';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import PopupMenu from "../PopupMenu/PopupMenu";
import {validateName, validatePassword, validateEmail, validateSearchInput} from "../../utils/validation"
import {moviesApi} from "../../utils/MoviesApi";

function App() {
    const [moviesCards, setMoviesCard] = React.useState([])
    const [isEditUser, setIsEditUser] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const handleOpenMenuPopupClick = () => {
        setIsOpen(true)
    }

    const handleCloseMenuPopupClick = () => {
        setIsOpen(false)
    }

    const handleEditUserClick = (event) => {
        setIsEditUser(true)

        event.preventDefault()
    }

    const handleSearchFilm = (valueSearchInput) => {
        let regex = valueSearchInput
        setIsLoading(true);
        moviesApi.getMovies()
            .then((res) => {
                let re = new RegExp(regex, "gi")
                let foundFilms = []
               for(let i = 0; i < res.length; i++) {
                   if(re.test(JSON.stringify(res[i])))
                       foundFilms.push(res[i])
                }
               setMoviesCard(foundFilms)
                localStorage.setItem("foundFilms", JSON.stringify(foundFilms))
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // React.useEffect(() => {
    //     let savedFilms = localStorage.getItem("foundFilms")
    //     setMoviesCard(JSON.parse(savedFilms))
    // }, [])


    return (
        <div classname="App">
            <div classname="page">
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/movies">
                        <Movies movies={moviesCards} onClick={handleOpenMenuPopupClick} onSubmitSearch={handleSearchFilm} isLoading={isLoading} onChangeSearchInput={validateSearchInput}/>
                        <PopupMenu isOpen={isOpen && ("popup-menu__open")}
                                   onClickClosedPopup={handleCloseMenuPopupClick}/>
                    </Route>
                    <Route path="/signup">
                        <Register onChangePassword={validatePassword} onChangeEmail={validateEmail}
                                  onChangeName={validateName}/>
                    </Route>
                    <Route path="/signin">
                        <Login onChangePassword={validatePassword} onChangeEmail={validateEmail}/>
                    </Route>
                    <Route path="/profile">
                        <Profile userName="Виталий" email="pochta@yandex.ru" onClickEditButton={handleEditUserClick}
                                 isEdit={isEditUser}/>
                        <PopupMenu isOpen={isOpen && ("popup-menu__open")}
                                   onClickClosedPopup={handleCloseMenuPopupClick}/>
                    </Route>
                    <Route path="/saved-movies">
                        <SavedMovies movies={moviesCards} onSubmitSearchFilm={handleSearchFilm}/>
                        <PopupMenu isOpen={isOpen && ("popup-menu__open")}
                                   onClickClosedPopup={handleCloseMenuPopupClick}/>
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;