import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { LOOP } from "@splidejs/splide";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function OurSpecialists() {
  return (
    <>
      <div className="container-0" id="specialists">
        <div className="our-specialists">Наши специалисты</div>
        <div className="specialists">
          <div className="specialist">
            <LazyLoadImage
              className="specialist-img"
              effect="black-and-white"
              width={300}
              height={300}
              src="../img/gulfia.jpeg"
              placeholderSrc={"../img/sp-placeholder.png"}
            />
            <h3 className="specialist-name">Абдурахманова Гульфия Халитовна</h3>
            <p className="specialization">
              Врач невролог, врач высшей квалификационной категории
            </p>
          </div>
          <div className="specialist">
            <LazyLoadImage
              className="specialist-img"
              effect="black-and-white"
              width={300}
              height={300}
              src="../img/alia.jpeg"
              placeholderSrc={"../img/sp-placeholder.png"}
            />
            <h3 className="specialist-name">Озганбаева Алия Муртазалиевна</h3>
            <p className="specialization">Врач терапевт</p>
          </div>
          <div className="specialist">
            <LazyLoadImage
              className="specialist-img"
              effect="black-and-white"
              width={300}
              height={300}
              src="../img/emina.jpeg"
              placeholderSrc={"../img/sp-placeholder.png"}
            />
            <h3 className="specialist-name">Саитова Эмина Нурсаидовна</h3>
            <p className="specialization">Главный врач, врач педиатр</p>
          </div>
          <div className="specialist">
            <LazyLoadImage
              className="specialist-img"
              effect="black-and-white"
              width={300}
              height={300}
              src="../img/seperxan.jpeg"
              placeholderSrc={"../img/sp-placeholder.png"}
            />
            <h3 className="specialist-name">Сариева Сеперхан Мурзадиновна</h3>
            <p className="specialization">
              Нейропсихолог, клинический психолог
            </p>
          </div>
        </div>

        <Splide
          className="specialists mobile-specialists"
          options={{
            rewind: true,
            width: "100%",
            gap: "5%",
            padding: 60,
            // autoWidth: true,
            perPage: 2,
            perMove: 1,
            // autoplay: true,
            interval: 2500,
            type: "loop",
            arrows: true,
            mediaQuery: "max",
            breakpoints: {
              768: {
                perPage: 2,
              },
              425: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="specialist">
              <img src="../img/gulfia.jpeg" className="specialist-img" alt="" />
              <h3 className="specialist-name">
                Абдурахманова Гульфия Халитовна
              </h3>
              <p className="specialization">
                Врач невролог врач высшей квалификационной категории
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="specialist">
              <img src="../img/alia.jpeg" className="specialist-img" alt="" />
              <h3 className="specialist-name">Озганбаева Алия Муртазалиевна</h3>
              <p className="specialization">Врач терапевт</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="specialist">
              <img src="../img/emina.jpeg" className="specialist-img" alt="" />
              <h3 className="specialist-name">Саитова Эмина Нурсаидовна</h3>
              <p className="specialization">Главный врач врач педиатр</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="specialist">
              <img src="../img/seperxan.jpeg" className="specialist-img" alt="" />
              <h3 className="specialist-name">Сариева Сеперхан Мурзадиновна</h3>
              <p className="specialization">
                Нейропсихолог, клинический психолог
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}
