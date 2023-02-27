import React from "react";

export default function Footer() {
    return <footer>
        <div className="footer">
            <div className="logo-footer">
                <img src="../img/logo2.svg"/>
                <h2 className="tel-footer">+7 (3462) 38‒08‒94</h2>
            </div>
            <div className="footer-name-link">
                <div className="inc-name">
                    <p>© ОДО Медмел-медицина оздоровления</p>
                    <p>2023</p>
                </div>
                <div className="link-footer">
                    <a href="../amendments_to_the_charter.pdf" download="../amendments_to_the_charter.pdf">Санитарно-эпидемологическое заключение</a>
                    <a href="../license.pdf" download="../license.pdf">Лицензия</a>
                </div>
            </div>
        </div>
    </footer>;
}