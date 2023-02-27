import React from "react";
// import video from 'https://disk.yandex.ru/i/KTJXD2wuugIMjA';

export default function Description() {
    return <>
        <div className="container">
        <div className="short-description">
            <p className="mimi-p">Медицина оздоровления в Сургуте</p>
            <h2>Мы стремимся помочь вам чувствовать себя хорошо</h2>
            <p className="mini-p">В своей практике мы используем передовые методы  диагностики и лечения заболеваний</p>
            <button className="description-button">ЗАПИСАТЬСЯ</button>
        </div>
        <video width="439"  height="440" controls className="video">
            
            <source src="../img/pxp.mp4" type="video/mp4" />
        </video>
        </div>
    </>;
}