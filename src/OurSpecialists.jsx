import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from "@splidejs/splide";

export default function OurSpecialists() {
    return <>
        <div className="container-0" id='specialists'>
            <div className="our-specialists">Наши специалисты</div>
            <div className="specialists">
                <div className="specialist">
                    <img src="../img/gulfia.jpeg" alt="" />
                    <h3 className="specialist-name">Абдурахманова Гульфия Халитовна</h3>
                    <p className="specialization">Врач невролог врач высшей квалификационной категории</p>
                </div>
                <div className="specialist">
                    <img src="../img/alia.jpeg" alt="" />
                    <h3 className="specialist-name">Озганбаева Алия Муртазалиевна</h3>
                    <p className="specialization">Врач терапевт</p>
                </div>
                <div className="specialist">
                    <img src="../img/emina.jpeg" alt="" />
                    <h3 className="specialist-name">Саитова Эмина Нурсаидовна</h3>
                    <p className="specialization">Главный врач врач педиатр</p>
                </div>
                <div className="specialist">
                    <img src="../img/seperxan.jpeg" alt="" />
                    <h3 className="specialist-name">Сариева Сеперхан Мурзадиновна</h3>
                    <p className="specialization">Нейропсихолог, клинический психолог</p>
                </div>
            </div>

            <Splide className="specialists mobile-specialists" options={ {
                    rewind: true,
                    width : "100%",
                    gap: '5%',
                    padding: 60,
                    // autoWidth: true, 
                    perPage: 2,
                    perMove: 1,
                    // autoplay: true,
                    interval: 2500,
                    type: 'loop',
                    arrows: true,
                    mediaQuery: 'max',
                    breakpoints: {
                            768: {
                                perPage: 2,
                            },
                            425: {
                                perPage: 1,
                            }
                        }
                } }>
                <SplideSlide>
                <div className="specialist">
                    <img src="../img/gulfia.jpeg" alt="" />
                    <h3 className="specialist-name">Абдурахманова Гульфия Халитовна</h3>
                    <p className="specialization">Врач невролог врач высшей квалификационной категории</p>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className="specialist">
                    <img src="../img/alia.jpeg" alt="" />
                    <h3 className="specialist-name">Озганбаева Алия Муртазалиевна</h3>
                    <p className="specialization">Врач терапевт</p>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className="specialist">
                    <img src="../img/emina.jpeg" alt="" />
                    <h3 className="specialist-name">Саитова Эмина Нурсаидовна</h3>
                    <p className="specialization">Главный врач врач педиатр</p>
                </div>
                </SplideSlide>
                <SplideSlide>
                <div className="specialist">
                    <img src="../img/seperxan.jpeg" alt="" />
                    <h3 className="specialist-name">Сариева Сеперхан Мурзадиновна</h3>
                    <p className="specialization">Нейропсихолог, клинический психолог</p>
                </div>
                </SplideSlide>
            </Splide>
        </div>
        
    </>;
}