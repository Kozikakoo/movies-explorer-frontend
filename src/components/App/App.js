import React from "react";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function App() {

return(
<div classname="App">
<div classname="page">
<Header children={<div className="header__block-button"><button className="header__button-reg">Регистрация</button>
    <button className="header__button-log">Войти</button></div>}/>
    <Promo children={<NavTab/>}/>
    <AboutProject/>
    <Techs/>
    <AboutMe/>
    <Portfolio/>
    <Footer/>
</div>
</div>
)
}

export default App;