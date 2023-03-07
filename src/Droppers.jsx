import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import dropperData from "./dropperData.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "@splidejs/react-splide/css";

const dropperList = Object.keys(dropperData);

export default function Droppers() {
  const [dropperItem, setDropperItem] = useState();

  const [modalActive, setModalActive] = useState(false);

  function modalDropper(item) {
    console.log("render");
    setDropperItem(item);
    setModalActive(true);
  }

  return (
    <>
      <div className="container-0" id="drops">
        <div className="arrows">
          <h1>Капельницы</h1>
          {/* <div><img src="../img/arrow2.svg" alt="" />2/5<img className="splide__arrows" src="../img/arrow.svg" alt="" /></div> */}
        </div>
        <Splide
          options={{
            rewind: true,
            width: "100%",
            gap: "20px",
            perPage: 4,
            perMove: 1,
            autoplay: true,
            interval: 6000,
            arrows: true,
            mediaQuery: "max",
            breakpoints: {
              1222: {
                perPage: 3,
              },
              880: {
                perPage: 2,
              },
              425: {
                perPage: 1,
              },
            },
          }}
        >
          {dropperList.map((element) => {
            return (
              <SplideSlide key={element.name}>
                <div className="dropper">
                  <LazyLoadImage
                    effect="black-and-white"
                    width={272}
                    height={357}
                    src={"../img/" + element + ".png"}
                    placeholderSrc={"../img/placeholder-dropper.png"}
                  />
                  <button
                    className="button-dropper"
                    onClick={() => modalDropper(element)}
                  >
                    Узнать больше
                  </button>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
        <Modal active={modalActive} setActive={setModalActive}>
          {
            <>
              <LazyLoadImage
                effect="blur"
                width={272}
                height={357}
                src={"../img/" + dropperItem + ".png"}
                placeholderSrc={"../img/placeholder-dropper.png"}
              />
              <div className="modal-description">
                <div className="dropper-content">
                  <h2 className="dropper-name">
                    {dropperData[dropperItem]?.name}
                  </h2>
                  <p className="included-service">
                    {dropperData[dropperItem]?.included_service}
                  </p>
                  <h1 className="dropper-price">
                    {dropperData[dropperItem]?.price}
                  </h1>
                  <p className="dropper-description">
                    {dropperData[dropperItem]?.full_description}
                  </p>
                </div>
                <a href="#" className="ms_booking">
                  <button className="button-services">ЗАПИСАТЬСЯ</button>
                </a>
              </div>
            </>
          }
        </Modal>
      </div>
    </>
  );
}
