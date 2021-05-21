import React, { Component } from 'react';
import style from './navbar.module.scss';
import Logo from '../../../assets/images/pug-logo.png';
import './navbar.module.scss';
import $ from "jquery";


export default class NavBar extends Component {
    render() {

        $(window).scroll(function(){
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        });

        return (
            <nav className="container-fluid">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={Logo} />
                    <div className={style.pugButton}>Home</div>
                    <div className={style.pugButton}>Images</div>
                    <div className={style.pugButton}>Pugs</div>
                    <div className={style.pugButton}>About</div>
                </div>
            </nav>
        )
    }
}
