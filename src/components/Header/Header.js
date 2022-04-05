import React from "react";
import { Link, NavLink } from "react-router-dom";
import headerLogo from '../../images/headerLogo.svg';

export function Header({ loggedIn, handlePopupClick, linkPlaceHolder, loginPLaceHolder }) {


    return (
        <header className={`header ${loggedIn ? 'header_black' : ''}`}>
            <div className='header__container'>
                <Link to='/'>
                    <img className='header__logo' src={headerLogo} alt='логотип проекта Movie-Explorer' />
                </Link>
                <div className={`header__list ${loggedIn ? '' : 'header__list_hidden'}`}>
                    <NavLink className='header__list-item' to='/movies'>Фильмы</NavLink>
                    <NavLink className='header__list-item' to='/saved-movies'>Сохранённые фильмы</NavLink>
                </div>
                <div className={`${loggedIn ? 'header__account_hidden' : 'header__account'}`}>
                    <Link to={`${loggedIn ? '/profile' : '/signup'}`} className='header__email'>{`${loggedIn ? '' : 'Регистрация'}`}</Link>
                    <Link to={`${loggedIn ? '/profile' : '/signin'}`} className={` ${loggedIn ? 'header__link header__link_auth'  : 'header__link'}`}>
                        {`${loggedIn ? 'Аккаунт' : 'Войти'}`} 
                    </Link>
                </div>
                <button
                    onClick={handlePopupClick}
                    className={`header__burger-menu ${loggedIn && 'header__burger-menu_visible'}`}>
                </button>
            </div>
        </header>
    );
}