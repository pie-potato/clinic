import React from 'react';

export default function Header() {
    return <>
        <header>
            <img src="./img/logo.svg"/>
            <div className='link'>
                <a>О клинике</a>
                <a>Услуги</a>
                <a>Специалисты</a>
                <a>Контакты</a>
                <a>Социальное отделение</a>
            </div>
            <a className='tel'>+7 (3462) 38-08-94</a>
        </header>
    </>;
}