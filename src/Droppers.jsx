import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import dropperData from './dropperData.json';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from "@splidejs/splide";



const dropperList = Object.keys(dropperData)

let d = "antistress"

export default function Droppers() {

    const [dropperItem, setDropperItem] = useState()

    const [modalActive, setModalActive] = useState(false)

    function modalDropper(item) {
        setDropperItem(item)
        setModalActive(true)
    }

    return <>
        <div className="container-0">
            <div className="arrows">
                <h1>Капельницы</h1>
                <div><img src="../img/arrow2.svg" alt="" />2/5<img className="splide__arrows" src="../img/arrow.svg" alt="" /></div>
            </div>
            <Splide options={ {
                    rewind: true,
                    width : "100%",
                    gap   : '20px',
                    perPage: 4,
                    perMove: 1,
                    autoplay: true,
                    interval: 2500,
                    type: 'loop',
                    arrows: true,
                    mediaQuery: 'max',
                    breakpoints: {
                            1222: {
                                perPage: 3,
                            },
                            880: {
                                perPage: 2,
                            },
                            425: {
                                perPage: 1,
                            }
                        }
                } }>
                {dropperList.map(element => {
                    console.log(element)
                    return (<SplideSlide>
                            <div className="dropper"><img src={"../img/"+element+".svg"} alt="" /><button className="button-dropper" onClick={() => modalDropper(element)}>Узнать больше</button></div> 
                            </SplideSlide>)
                    })}
            </Splide>
            <Modal active={modalActive} setActive={setModalActive}>
                {<>
                    <div className="dropper"><img src={"../img/"+dropperItem+".svg"} alt="" /></div> 
                    <div>
                        <h2>{dropperData[dropperItem]?.name}</h2>
                        <p>{dropperData[dropperItem]?.included_service}</p>
                        <h1>{dropperData[dropperItem]?.price}</h1>
                        <p>{dropperData[dropperItem]?.full_description}</p>
                        <button className="description-button">ЗАПИСАТЬСЯ</button>
                    </div>
                </>}
            </Modal>
        </div>
    </>;
}