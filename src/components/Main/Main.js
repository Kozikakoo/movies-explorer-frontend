import React from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";

function Main() {
    return (
        <>
            <Header logoClassName="logo" children={<div className="header__buttons">
                <Link to="/signup">
                    <button className="header__button-reg">Регистрация</button>
                </Link>
                <Link to="/signin">
                    <button className="header__button-log">Войти</button>
                </Link>
            </div>}/>
            <main>
                <Promo children={<NavTab/>}/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
            <Footer/>
        </>
    )
}

export default Main;