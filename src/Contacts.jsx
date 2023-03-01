import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contacts() {
    const defaultState = {
        center: [61.250730, 73.431852],
        zoom: 15,
      };

    return <>
    <div className="container-0">
        <div className="arrows"><h1>Мы на связи</h1></div>
        <div className="container-contacts">
            <YMaps>
                <Map defaultState={defaultState} height={526} className="y-map">
                    <Placemark geometry={[61.250730, 73.431852]} />
                </Map>
            </YMaps>
            <div className="contacts">
                <div className="contacts-tel">
                    <h1>Контакты</h1>
                    <p>​Сургут, Университетская, 23/5</p>
                    <a className="tel" href="tel:>+73462380894">+7 (3462) 38‒08‒94</a>
                </div>
                <div className="working-hours">
                    <div>
                        <div className="work-day">
                            <p>Будни:</p><p>8:00 - 21:00</p>
                        </div>
                        <div className="work-day">
                            <p>Сб, вс:</p><p>10:00 - 20:00</p>
                        </div>
                    </div>
                    <button className="button-services">ЗАПИСАТЬСЯ</button>
                </div>
            </div>
        </div>
    </div>
        {/* <div className="container">
            
            
        </div> */}
    </>;
}