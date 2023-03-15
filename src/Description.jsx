import React, { useSate, useState } from "react";
import Modal from "./Modal";

export default function Description() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="container-description">
        <div className="short-description">
          <p className="mimi-p">Медицина оздоровления в Сургуте</p>
          <h1>Заботимся о вашем здоровье</h1>
          <p className="mini-p">
            В своей практике мы используем передовые методы диагностики и
            лечения заболеваний
          </p>
          <a href="#" className="ms_booking">
            <button className="description-button">ЗАПИСАТЬСЯ</button>
          </a>
        </div>
        <div className="video">
          <img
            src="../img/video-pic.svg"
            className="video-svg"
            onClick={() => setModalActive(true)}
          />
          <div
            className="button-play-container"
            onClick={() => setModalActive(true)}
          >
            <img src="../img/button-play.svg" />
          </div>
          <img src="../img/elipse-1.svg" className="eliple-1" />
          <img src="../img/elipse-2.svg" className="eliple-2" />
          <img src="../img/elipse-5.svg" className="eliple-5" />
          <img src="../img/elipse-6.svg" className="eliple-6" />
          <img src="../img/elipse-8.svg" className="eliple-8" />
          <img src="../img/elipse-9.svg" className="eliple-9" />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} pad={0}>
        <iframe
          className="video-modal"
          width="100%"
          height="620"
          src="https://www.youtube.com/embed/EK2zrhecUTw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}
