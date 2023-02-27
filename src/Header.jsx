import React from 'react';

export default function Header() {
    return <>
        <header>
            <img src="../img/logo.svg"/>
            {/* <div className='link'>
                <a>О клинике</a>
                <a>Услуги</a>
                <a>Специалисты</a>
                <a>Контакты</a>
                <a>Социальное отделение</a>
            </div>             */}
            
            <section class="top-nav">
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
                <ul class="menu">
                <li><a>О клинике</a></li>
                <li><a>Услуги</a></li>
                <li><a>Специалисты</a></li>
                <li><a>Контакты</a></li>
                <li><a>Социальное отделение</a></li>
                <li><a className='tel'>+7 (3462) 38-08-94</a></li>
                </ul>
            </section>
            
        </header>
    </>;
}