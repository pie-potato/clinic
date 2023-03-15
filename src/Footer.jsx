import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo-footer">
          <img src="../img/logo-footer.svg" />
          <a href="tel: 83462380894">
            <h2 className="tel-footer">+7 (3462) 38‒08‒94</h2>
          </a>
        </div>
        <div className="footer-name-link">
          <div className="inc-name">
            <p>© ООО Медмел-медицина оздоровления</p>
            <p>2023</p>
          </div>
          <div className="link-footer">
            <a
              href="../amendments_to_the_charter.pdf"
              download="../amendments_to_the_charter.pdf"
            >
              Санитарно-эпидемиологические заключение
            </a>
            <a href="../license.pdf" download="../license.pdf">
              Лицензия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
