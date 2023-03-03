import React from "react";

export default function AboutClinic() {
  return (
    <>
      <div className="container" id="about">
        <div>
          <img className="clinic-img" src="../img/droppler.png" />
        </div>
        <div className="about-clinic">
          <div>
            <h1>О клинике</h1>
            <p className="teraphy">
              Наша клиника оснащена удобными креслами и мягкими пледами. Во
              время процедуры вы можете спокойно читать книгу или листать ленту
              инстаграм. Фоновая музыка поможет вам расслабиться.
            </p>
          </div>
          <div>
            <h3>Озганбаева Алия Муртазалиевна</h3>
            <p className="post">Руководитель клиники Медмел в Сургуте</p>
          </div>
        </div>
      </div>
    </>
  );
}
