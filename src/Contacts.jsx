import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Contacts() {
  const defaultState = {
    center: [61.25073, 73.431852],
    zoom: 15,
  };

  return (
    <>
      <div className="container-0">
        <div className="arrows">
          <h1>Мы на связи</h1>
        </div>
        <div className="container-contacts">
          <YMaps>
            <Map defaultState={defaultState} className="y-map">
              <Placemark geometry={[61.25073, 73.431852]} />
            </Map>
          </YMaps>
          <div className="contacts">
            <div className="contacts-tel">
              <h1>Контакты</h1>
              <p>​Сургут, Университетская, 23/5</p>
              <a className="tel" href="tel:>+73462380894">
                +7 (3462) 38‒08‒94
              </a>
              <br />
              <p>
                Записаться на прием можно по телефону, WhatsApp или по кнопке
                ниже.
              </p>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <img src="../img/qr.jpg" alt="QR-code" width={150}/>
                <h2>Оцените наши услуги</h2>
              </div>
            </div>
            <div className="working-hours">
              <div>
                <div className="work-day">
                  <p>Будни:</p>
                  <p>8:00 - 21:00</p>
                </div>
                <div className="work-day">
                  <p>Сб, вс:</p>
                  <p>10:00 - 20:00</p>
                </div>
              </div>
              <a href="#" className="ms_booking">
                <button className="button-services">ЗАПИСАТЬСЯ</button>
              </a>
            </div>
          </div>
        </div>
        {/* <div>
          <img src="../img/poster.png" alt="Постер" width={1000}/>
        </div> */}
      </div>
      {/* <div className="container">
            
            
        </div> */}
    </>
  );
}
