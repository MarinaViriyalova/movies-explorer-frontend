import React from 'react';

export default function Footer() {
    return (
        <section className='footer'>
            <p className='footer__paragraph'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__copyright'>Марина Вириялова © 2022</p>
                <ul className='footer__list'>
                    <li className='footer__list-item'><a className='footer__link' href='https://practicum.yandex.ru'>Яндекс.Практикум</a></li>
                    <li className='footer__list-item footer__list-item_margin'><a className='footer__link' href='https://github.com/MarinaViriyalova'>Github</a></li>
                    <li className='footer__list-item'><a className='footer__link' href='https://www.facebook.com/marina.viriyalova'>Facebook</a></li>
                </ul>
            </div>
        </section>
    );
}