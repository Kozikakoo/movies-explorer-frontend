import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import {Link, Route, Switch} from 'react-router-dom';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";

function App() {

    const [isEditUser, setIsEditUser] = React.useState(false)

    const handleEditUserClick = (event) => {
        setIsEditUser(true)

        event.preventDefault()
    }


    return (
        <div classname="App">
            <div classname="page">
                <Switch>
                    <Route exact path="/">
                        <Header logoClassName="logo" children={<div className="header__buttons">
                            <Link to="/signup">
                                <button className="header__button-reg">Регистрация</button>
                            </Link>
                            <Link to="/signin">
                                <button className="header__button-log">Войти</button>
                            </Link>
                        </div>}/>
                        <Main/>
                        <Footer/>
                    </Route>
                    <Route path="/movies">
                        <Movies/>
                    </Route>
                    <Route path="/signup">
                        <Register/>
                    </Route>
                    <Route path="/signin">
                        <Login/>
                    </Route>
                    <Route path="/profile">
                        <Profile userName="Виталий" email="pochta@yandex.ru" onClickEditButton={handleEditUserClick}
                                 isEdit={isEditUser}/>
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