import React, { useState } from "react";
import Modal from "react-modal";
import feedback1 from "../../assets/chat/1.png";
import feedback2 from "../../assets/chat/2.png";
import feedback3 from "../../assets/chat/3.png";
import feedback4 from "../../assets/chat/4.png";
import feedback5 from "../../assets/chat/5.png";
import feedback6 from "../../assets/chat/6.png";
import fundo1 from "../../assets/Fundo1.png";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const images = [feedback1, feedback2, feedback3, feedback4, feedback5, feedback6];

  const openModal = (image) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="w-full min-[1600px]:h-[80%] bg-black flex justify-center items-center" style={{ backgroundImage: `url(${fundo1})` }}>
      <div className="w-9/12 max-[1600px]:w-11/12 max-[1366px]:w-11/12 h-full flex flex-col">
        <div className="h-1/6 flex justify-center items-center">
          <h1 className="max-[640px]:py-5 max-[640px]:text-center max-[1600px]:py-10 text-white font-bold text-3xl max-[640px]:text-2xl">
            CLIENTES QUE PASSARAM PELO PROCESSO DA{" "}
            <span className="text-violet-600">DUETTO</span>
          </h1>
        </div>

        <div className="h-4/6 flex max-[1366px]:flex-col justify-around items-center">
          <div className="grid grid-rows-2 max-[640px]:grid-rows-3 grid-flow-col gap-10 max-[640px]:gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-56 h-56 max-[640px]:w-40 max-[640px]:h-40 rounded-xl hover:scale-110 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img className="rounded-xl" src={image} alt={`Feedback ${index + 1}`} />
              </div>
            ))}
          </div>
          
          {/*<div className="w-[560px] h-[315px] max-[640px]:w-[315px] max-[640px]:mt-5 max-[1366px]:mt-10 min-[1600px]:ps-2.5">
            <iframe
              className="rounded-3xl overflow-hidden"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>*/}
        </div>

        <div className="h-1/6 flex justify-center items-center max-[640px]:my-5 my-10">
          <a
            href="https://wa.me/554999767039"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[374px] h-[43px] max-[640px]:w-[315px] text-white bg-violet-600 rounded-full hover:scale-105 hover">
              QUERO CONVERSAR COM A DUETTO
            </button>
          </a>
        </div>
      </div>

      {/* Modal for enlarged image */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex justify-center items-center bg-black/30 bg-opacity-75 fixed inset-0 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative">
          <img
            src={activeImage}
            alt="Ampliado"
            className="rounded-xl max-w-full max-[640px]:w-[85%] max-[640px]:ml-6 max-h-full"
          />
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 max-[640px]:right-8 text-white bg-gray-500 rounded-full p-2 hover:bg-gray-600"
          >
            ✖
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Feedback;
