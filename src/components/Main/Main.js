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
import PopupMenu from "../PopupMenu/PopupMenu";

function Main(props) {
    return (
        <>
            {props.children}
            <main>
                <Promo children={<NavTab/>}/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
                <Portfolio/>
            </main>
            <Footer/>
            <PopupMenu isOpen={props.isOpen} onClickClosedPopup={props.onClickClosedPopup}/>
        </>
    )
}

export default Main;