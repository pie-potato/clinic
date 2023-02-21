import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from "@splidejs/splide";

export default function OurSpecialists() {
    return <>
        <div className="container-0">
            <div className="our-specialists">Наши специалисты</div>
            <div className="specialists">
                <div className="specialist">
                    <img src="../img/pp.svg" alt="" />
                    <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                    <p className="specialization">Массажист</p>
                </div>
                <div className="specialist">
                    <img src="../img/pp.svg" alt="" />
                    <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                    <p className="specialization">Массажист</p>
                </div>
                <div className="specialist">
                    <img src="../img/pp.svg" alt="" />
                    <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                    <p className="specialization">Массажист</p>
                </div>
                <div className="specialist">
                    <img src="../img/pp.svg" alt="" />
                    <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                    <p className="specialization">Массажист</p>
                </div>
            </div>

            <Splide className="mobile-specialists" options={ {
                    rewind: true,
                    width : "100%",
                    gap   : '0px',
                    perPage: 3,
                    perMove: 1,
                    // autoplay: true,
                    interval: 2500,
                    type: 'loop',
                    arrows: true,
                    mediaQuery: 'max',
                    breakpoints: {
                            880: {
                                perPage: 2,
                            },
                            425: {
                                perPage: 1,
                            }
                        }
                } }>
                <SplideSlide>
                    <div className="specialist">
                        <img src="../img/pp.svg" alt="" />
                        <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                        <p className="specialization">Массажист</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="specialist">
                        <img src="../img/pp.svg" alt="" />
                        <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                        <p className="specialization">Массажист</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="specialist">
                        <img src="../img/pp.svg" alt="" />
                        <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                        <p className="specialization">Массажист</p>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="specialist">
                        <img src="../img/pp.svg" alt="" />
                        <h3 className="specialist-name">Мелова Анна Ивановна</h3>
                        <p className="specialization">Массажист</p>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
        
    </>;
}