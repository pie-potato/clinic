import React from "react";


export default function AboutClinic() {
    return <>
        <div className="container">
            <div>
                <img  className="clinic-img" src="../img/a.svg"/>
            </div>
            <div className="about-clinic">
                <div>
                    <h1>О клинике</h1>
                    <p className="teraphy">Внутривенная терапия — самый короткий способ доставить необходимые вещества в организм и начать поддержку немедленно, поэтому мы гарантируем эффект и улучшение самочувствия после первой капельницы!</p>
                </div>
                <div>
                    <h3>Озганбаева Алия Муртазалиевна</h3>
                    <p className="post">Руководитель клиники Медмел в Сургуте</p>
                </div>
            </div>
        </div>
    </>;
}