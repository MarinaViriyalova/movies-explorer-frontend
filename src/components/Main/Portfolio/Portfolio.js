import React from 'react';

export function Portfolio() {
    return (
        <section className='portfolio'>
            <p className='portfolio__para'>Портфолио</p>
            <ul className='portfolio__list'>
                <li className='portofolio__item'>
                    <h4 className='portofolio__item-header'>Статичный сайт</h4>
                    <a
                        href='https://marinaviriyalova.github.io/how-to-learn/'
                        alt='static'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='portfolio__img'></div>
                    </a>
                </li>
                <li className='portofolio__item'>
                    <h4 className='portofolio__item-header'>Адаптивный сайт</h4>
                    <a
                        href='https://marinaviriyalova.github.io/russian-travel/'
                        alt='static'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='portfolio__img'></div>
                    </a>
                </li>
                <li className='portofolio__item'>
                    <h4 className='portofolio__item-header'>Одностраничное приложение</h4>
                    <a
                        href='https://marinaviriyalova.github.io/react-mesto-auth/'
                        alt='static'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='portfolio__img'></div>
                    </a>
                </li>
            </ul>
        </section>
    );
}